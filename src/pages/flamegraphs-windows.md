---
layout: ../layouts/post.astro
title: Flamegraphs for Rust on Windows
description: Generating flamegraphs for Rust code on Windows can be a pain to figure out. My guide to generating a flamegraph to profile a Rust binary using Windows Performance Analyzer.
---

Most profiling guides are for Unix platforms and use specific commands like `perf`. Popular tools such as `cargo flamegraph`, can be used with Windows, but can be difficult/ impossible to set up properly. Microsoft provides a whole suite of performance profiling tools, but they aren’t documented that well so are hard to use outside of Visual Studio.

Here is how I have worked out how to produce flame graphs to profile Rust code on Windows.
If you know a better way let me know!

1. Install [Windows Performance Analyzer](https://learn.microsoft.com/en-us/windows-hardware/test/wpt/windows-performance-analyzer).

   You can download it as part of the “Windows Assessment and Deployment Kit” or just download it from the [Windows Store](https://apps.microsoft.com/detail/9n0w1b2bxgnz) which includes everything you need.

2. Compile the Rust program which you want to profile.

   You want to compile it in release mode, to match the real use cases of your binary but will want debug symbols so you understand where each part of the trace is. If you add this to your `Cargo.toml`:

   ```toml
   [profile.bench]
   debug = true
   ```

   If you build your binary with the `bench` profile it should all work properly.

   ```bash
   cargo build --profile=bench
   ```

3. Record the performance trace with `xperf`.

   This should have been installed with Windows Performance Analyzer. It needs administrator privileges to run, as it records the entire system.

   ```bash
   xperf -on Diag+Profile -stackwalk Profile && .\target\release\YOUR_BINARY_NAME.exe && xperf -d OUTPUT_NAME.etl
   ```

   Replace `YOUR_BINARY_NAME` with the name of your binary which you have compiled, you can also pass any flags or arguments you want. Also, replace `OUTPUT_NAME` with what you would like to call the trace file.

   The command starts recording all the relevant events across the system, before running your command and saving everything that it has recorded into a file.

   The binary you run will likely need to be some sort of benchmark or stress test, to ensure it is long enough to get profiled.

4. Open Windows Performance Analyzer and open your `.etl` file
5. Load symbols, so you can see what each part of the flamegraph refers to.

   In the menu go `Trace` > `Configure Symbol Path`, and add your `/target/release` folder to the list of symbol locations. This will also Windows Performance Analyzer to find the function names for your code.

   Then select `Trace` > `Load Symbols`. A progress bar should now be showing at the top, and will take a while to load everything (a long while...).

6. View the flamegraph.

   Double-click the pinkish `Computation - CPU Usage (Sampled)` to bring the analysis into the main area.

   Select `Flame by Progress, Stack` in the second dropdown in the toolbar. (See screenshot.)

   ![Selecting Flamegraph in the correct menu](../assets/flamegraph-select.png)

   Then click the small graph icon and select `Flame`.

   Then use the search next to it to find your binaries name. Once you have found your binary, right-click on the process and select `Filter to Selection`.

   You can now view the flamegraph for just your binary.

7. Have fun profiling!

   ![Complete flamegraph](../assets/flamegraph-final.png)
