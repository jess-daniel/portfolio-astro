---
title: "Home Lab"
description: "My personal homelab server that I use to run various open source projects and to host my portfolio."
heroImage: "/home-lab.jpg"
---

## Summary

My server operates on Rocky Linux version 9.3 and the hardware itself has 16GB of RAM and 1TB of SSD storage. I use Podman/Docker to containerize my running software processes. I’m currently experimenting with different monitoring setups but as of right now I am working with Prometheus and Grafana to monitor the status of applications. I also use Portainer as a GUI web interface to quicky manage and update containers, which adds a nice conveinence of being able to check that everything is running fine without having to login to the server through SSH. My portfolio is hosted in a container that is exposed to the internet securely through a CloudFlare tunnel. One cool thing that I ended up doing on a complete whim was setting up a custom NeoVim configuration using Lua. I now have a nearly full-fledged development IDE right on my server, which I’m using to write this very MD file. ;)

## Future Plans

I still have a lot of stuff I would like to do like setting up a CI/CD system to rebuild and deploy my custom applications. I was contemplating setting up an email server, but I decided that it wasn’t worth the headache to get good deliverablilty, so I used CloudFlare instead with my custom domain. I want to upgrade the RAM with at least another 16GB fairly soon. I’m not currently hitting any bottlenecks but more power can’t hurt.
