// console.log("Đây là một thông báo thông thường.");
function laSoNguyenDuong(value) {
  return Number.isInteger(value) && value > 0;
}

console.log(laSoNguyenDuong(1)); // true
console.log(laSoNguyenDuong(1.2)); // false
console.log(laSoNguyenDuong(3)); // true
console.log(laSoNguyenDuong(0)); // false
