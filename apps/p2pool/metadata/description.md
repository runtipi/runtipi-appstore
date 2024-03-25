# Monero P2Pool

Decentralized pool for Monero mining.

Pool status and monitoring pages can be found at https://p2pool.io/, https://p2pool.io/mini/ and https://p2pool.observer/

## Contents

- [Monero P2Pool](#monero-p2pool)
  - [Contents](#contents)
  - [Prerequisites](#prerequisites)
  - [Why run and mine on p2pool instead of a "normal" Monero pool?](#why-run-and-mine-on-p2pool-instead-of-a-normal-monero-pool)
  - [Pool mining vs Solo mining vs P2Pool mining](#pool-mining-vs-solo-mining-vs-p2pool-mining)
  - [Features](#features)

## Prerequisites

- A running Monerod app (also available on Tipi)
- Hugepages enabled on the host
  - https://sethforprivacy.com/guides/run-a-p2pool-node/#hl-7-1

## Why run and mine on p2pool instead of a "normal" Monero pool?

Mining on Monero has always been one of the most decentralized PoW networks in the cryptocurrency space, but an issue that has plagued Monero (and all other PoW cryptocurrencies) is that even if miners themselves are numerous and diverse geographically, pools used by those miners are generally very few, geographically similar, and entirely centralized.

The pool operator of a normal mining pool controls the block template produced by all of the miners pointing to it, allowing them to leverage the hashrate for nefarious purposes if they so choose. Normal pools are also custodians of funds as all mined funds are sent first to the pool, and then the pool (hopefully) pays out from those funds to miners according to their work.

Pools and their operators are one of the most vulnerable aspects of Monero mining, but thankfully the Monero community (particularly sech1 [also known as [SChernykh](https://github.com/SChernykh)]) have built out a p2pool implementation, from scratch, with many improvements over past attempts at p2pool on Bitcoin and other blockchains.

Running p2pool allows you to participate in a second blockchain that is used to decentralize the normal pool functionality, while contributing work as a whole to the main Monero network.

For more details on p2pool and why you should use it, see this knowledge article from LocalMonero:
- [P2Pool and Its Role in Decentralizing Monero Mining](https://localmonero.co/knowledge/p2pool-decentralizing-monero-mining)

## Pool mining vs Solo mining vs P2Pool mining

Here's the comparison table of the different ways of mining. While pool mining is the easiest to setup, it centralizes Monero network and pool admin gets full power over your hashrate and your unpaid funds. Solo mining is 100% independent and the best for the network. P2Pool mining has all the advantages of solo mining, but also makes regular payouts possible.

|Pool type|Payouts|Fee|Min. payout|Centralized?|Stability|Control|Setup
|-|-|-|-|-|-|-|-|
|Centralized pool|Regular|0-3%|0.001-0.01 XMR|Yes|Less stable due to pool server outages|Pool admin controls your mined funds, what you mine and can execute network attacks|Only miner software is required
|Solo|Rare|0%|0.6 XMR or more|No|As stable as your Monero node|100% under your control|Monero node + optional miner
|**P2Pool**|Regular|0%|~0.0003 XMR|No|As stable as your Monero node|100% under your control|Monero node + P2Pool node + miner

## Features

- Decentralized: no central server that can be shutdown/blocked. P2Pool uses a separate blockchain to merge mine with Monero. Pool admin can't go rogue or be pressured to do an attack on the network because there is no pool admin!
- Permissionless: there is no one to decide who can mine on the pool and who can't.
- Trustless: there is no pool wallet, funds are never in custody. All pool blocks pay out to miners immediately.
- PPLNS payout scheme
- **0% fee**
- **0 XMR payout fee**
- **~0.0003 XMR minimal payout**
- Fast block times, down to 1 second
- Uncle blocks are supported to avoid orphans - all your shares will be accounted for!
- Configurable PPLNS window size and block time
- Advanced mempool picking algorithm, it creates blocks with better reward than what monerod solo mining does
- Password protected private pools
