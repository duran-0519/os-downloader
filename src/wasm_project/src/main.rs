use sysinfo::System;

fn main() {
    // 创建 System 实例并加载所有信息
    let mut sys = System::new_all();

    // 刷新以获取最新信息
    sys.refresh_all();

    // 获取并打印系统信息
    println!("=> 系统信息:");
    println!("=> system:");
    // RAM and swap information:
    println!("total memory: {} bytes", sys.total_memory());
    println!("used memory : {} bytes", sys.used_memory());
    println!("total swap  : {} bytes", sys.total_swap());
    println!("used swap   : {} bytes", sys.used_swap());

    // Display system information:
    println!("System name:             {:?}", System::name());
    println!("System kernel version:   {:?}", System::kernel_version());
    println!("System OS version:       {:?}", System::os_version());
    println!("System host name:        {:?}", System::host_name());
    let arch = std::env::consts::ARCH;
    println!("CPU 架构: {}", arch);
    // loop {
    //     sys.refresh_cpu_usage(); // Refreshing CPU usage.
    //     for cpu in sys.cpus() {
    //         print!("{}% ", cpu.cpu_usage());
    //     }
    //     // Sleeping to let time for the system to run for long
    //     // enough to have useful information.
    //     std::thread::sleep(sysinfo::MINIMUM_CPU_UPDATE_INTERVAL);
    // }
}
