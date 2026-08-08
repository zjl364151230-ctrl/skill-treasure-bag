#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { basename, resolve } from "node:path";
import { parseArgs } from "node:util";

const DEFAULT_OUTPUT_DIR = "/Users/zhangjialing/Documents/gpt/sucai11111111/chengpian";

const { values } = parseArgs({
  options: {
    source: { type: "string" },
    title: { type: "string" },
    date: { type: "string" },
    "output-dir": { type: "string", default: DEFAULT_OUTPUT_DIR },
    force: { type: "boolean", default: false },
    json: { type: "boolean", default: false },
  },
});

function fail(message) {
  console.error(message);
  process.exit(1);
}

function localDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

function cleanTitle(title) {
  return title
    .trim()
    .replace(/[\\/:*?"<>|]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/-+/g, "-")
    .replace(/^[-. ]+|[-. ]+$/g, "");
}

if (!values.source || !values.title) {
  fail("usage: archive-video.mjs --source <video.mp4> --title <script-title> [--date YYYY-MM-DD] [--output-dir <dir>] [--force] [--json]");
}

const source = resolve(values.source);
if (!existsSync(source) || statSync(source).size === 0) fail(`source is missing or empty: ${source}`);

const date = values.date || localDate();
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) fail(`invalid date: ${date}`);

const title = cleanTitle(values.title);
if (!title) fail("title becomes empty after filename sanitization");

let probe;
try {
  probe = JSON.parse(
    execFileSync(
      "ffprobe",
      [
        "-v", "error",
        "-show_entries", "format=duration,size:stream=codec_type,codec_name,width,height,r_frame_rate,channels,sample_rate",
        "-of", "json",
        source,
      ],
      { encoding: "utf8" },
    ),
  );
} catch (error) {
  fail(`ffprobe failed for ${basename(source)}: ${error instanceof Error ? error.message : String(error)}`);
}

const video = probe.streams?.find((stream) => stream.codec_type === "video");
const audio = probe.streams?.find((stream) => stream.codec_type === "audio");
const duration = Number(probe.format?.duration);

if (!video) fail("verification failed: no video stream");
if (!audio) fail("verification failed: no audio stream");
if (!Number.isFinite(duration) || duration <= 0) fail("verification failed: invalid duration");
if (video.width !== 1920 || video.height !== 1080) {
  fail(`verification failed: expected 1920x1080, got ${video.width}x${video.height}`);
}

const outputDir = resolve(values["output-dir"]);
const destination = resolve(outputDir, `${date}-${title}.mp4`);
if (existsSync(destination) && !values.force) fail(`archive already exists: ${destination}`);

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

const result = {
  ok: true,
  destination,
  bytes: statSync(destination).size,
  duration,
  video: {
    codec: video.codec_name,
    width: video.width,
    height: video.height,
    frameRate: video.r_frame_rate,
  },
  audio: {
    codec: audio.codec_name,
    channels: audio.channels,
    sampleRate: audio.sample_rate,
  },
};

console.log(values.json ? JSON.stringify(result) : `archived ${basename(source)} -> ${destination} (${duration.toFixed(2)}s, ${video.width}x${video.height}, ${video.codec_name}+${audio.codec_name})`);
