# dsh-pure-chat

English | [中文](README.md)

[![DSH Plugin](https://img.shields.io/badge/DSH-Plugin-111111)](https://github.com/niushuanan/xiaozhuang-dsh) [![Release](https://img.shields.io/badge/release-xiaozhuang--v0.4.2-2563eb)](https://github.com/niushuanan/dsh-pure-chat/releases/tag/xiaozhuang-v0.4.2) [![MIT](https://img.shields.io/badge/license-MIT-16a34a)](LICENSE)

Start a chat immediately without a workspace or local execution permissions while keeping image uploads, text-file uploads, and public Web search and reading.

<p align="center"><img src="docs/06-pure-chat.webp" alt="Start work and start chat actions in the sidebar" width="800"></p>

## Install

1. Open [Releases](https://github.com/niushuanan/dsh-pure-chat/releases/latest) and download the attached ZIP.
2. Give the ZIP to an AI that can read and modify the target DSH project.
3. Tell the AI: **Read AGENTS.md, INSTALL.md, and manifest.json first. Install only this plugin and preserve existing plugins, data, conversations, attachments, and settings.**
4. The installing AI merges the code and Cordis rows into the target version and validates only the entry points directly owned by this plugin.

## Contents

- <code>payload/</code>: plugin code and required runtime assets copied from the main repository.
- <code>manifest.json</code>: composition rows, sources, main-repository commit, and per-file SHA-256.
- <code>INSTALL.md</code>: direct installation, conflict adaptation, failure recovery, and narrow verification.
- <code>docs/</code>: real product screenshots from this version.

## Source and license

This repository is a one-way distribution mirror of [Xiaozhuang DSH](https://github.com/niushuanan/xiaozhuang-dsh), not an independent development source. It is synchronized from main-repository commit [`a257dd1bd3`](https://github.com/niushuanan/xiaozhuang-dsh/commit/a257dd1bd3ffe46877b1b812c1fc67c05b423b45) and released as [`xiaozhuang-v0.4.2`](https://github.com/niushuanan/dsh-pure-chat/releases/tag/xiaozhuang-v0.4.2). Licensed under the [MIT License](LICENSE).
