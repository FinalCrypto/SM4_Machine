use actix_web_static_files::resource_dir;

fn main() {
    println!("cargo:rerun-if-changed=./public");
    resource_dir("./public").build().unwrap();
}