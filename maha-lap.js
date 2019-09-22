class MahaLap {
  static tamnaiWithDay(day) {
    const days = {
      อาทิตย์: 1,
      จันทร์: 2,
      อังคาร: 3,
      พุธ: 4,
      พฤหัสบดี: 5,
      ศุกร์: 6,
      เสาร์: 7,
      ฮาโลวีน: 31,
      คริสมาสต์: 25,
      สงกรานต์: 13
    };
    // if (days[day]) {
    //   return days[day];
    // } else {
    //   99
    // }
    return days[day] ? days[day] : 99;
  }
}
module.exports = MahaLap;
