# Spacedrive

Spacedrive is an open source cross-platform file manager, powered by a virtual distributed filesystem (VDFS) written in Rust.

Organize files across many devices in one place. From cloud services to offline hard drives, Spacedrive combines the storage capacity and processing power of your devices into one personal distributed cloud, that is both secure and intuitive to use.

For independent creatives, hoarders and those that want to own their digital footprint, Spacedrive provides a free file management experience like no other.

---

![Spacedrive Interface](https://github.com/spacedriveapp/spacedrive/raw/main/apps/landing/public/github.webp?raw=true)

---


## What is a VDFS?

A VDFS (virtual distributed filesystem) is a filesystem designed to work across a variety of storage layers. With a uniform API to manipulate and access content across many devices, VDFS is not restricted to a single machine. It achieves this by maintaining a virtual index of all storage locations, synchronizing the database between clients in realtime. This implementation also uses CAS (Content-addressable storage) to uniquely identify files, while keeping record of logical file paths relative to the storage locations.

The first implementation of a VDFS can be found in this UC Berkeley paper by Haoyuan Li. This paper describes its use for cloud computing, however the underlying concepts can be translated to open consumer software.
