use wasm_bindgen::prelude::*;
use web_sys::console;

#[wasm_bindgen]
pub fn get_system_info() -> String {
    console::log_1(&"Getting system info...".into());
}
