# Bitcoin core

Bitcoin Core is free and open-source software that serves as a bitcoin node.

### Warning
The current size of the bitcoin blockchain is [more than 500 GB.](https://ycharts.com/indicators/bitcoin_blockchain_size)


## What Is A Full Node?

A full node is a program that fully validates transactions and blocks. Almost all full nodes also help the network by accepting transactions and blocks from other full nodes, validating those transactions and blocks, and then relaying them to further full nodes.

Most full nodes also serve lightweight clients by allowing them to transmit their transactions to the network and by notifying them when a transaction affects their wallet. If not enough nodes perform this function, clients won’t be able to connect through the peer-to-peer network—they’ll have to use centralized services instead.

Many people and organizations volunteer to run full nodes using spare computing and bandwidth resources—but more volunteers are needed to allow Bitcoin to continue to grow. This document describes how you can help and what helping will cost you.

## Minimum Requirements
Bitcoin Core full nodes have certain requirements. If you try running a node on weak hardware, it may work—but you’ll likely spend more time dealing with issues. If you can meet the following requirements, you’ll have an easy-to-use node.

- Desktop or laptop hardware running recent versions of Windows, Mac OS X, or Linux.

- 7 gigabytes of free disk space, accessible at a minimum read/write speed of 100 MB/s.

- 2 gigabytes of memory (RAM)

- A broadband Internet connection with upload speeds of at least 400 kilobits (50 kilobytes) per second

- An unmetered connection, a connection with high upload limits, or a connection you regularly monitor to ensure it doesn’t exceed its upload limits. It’s common for full nodes on high-speed connections to use 200 gigabytes upload or more a month. Download usage is around 20 gigabytes a month, plus around an additional 500 gigabytes the first time you start your node.