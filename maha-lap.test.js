const MahaLap = require("./maha-lap");
describe("Test Maha-Lap", () => {
  test("Test Tamnai wiht day จันทร์", () => {
    const result = MahaLap.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });

  test("Test Tamnai wiht day อังคาร", () => {
    const result = MahaLap.tamnaiWithDay("อังคาร");
    expect(result).toEqual(3);
  });

  test("Test Tamnai wiht day อาทิตย์", () => {
    const result = MahaLap.tamnaiWithDay("อาทิตย์");
    expect(result).toEqual(1);
  });

  test("Test Tamnai wiht day พุธ", () => {
    const result = MahaLap.tamnaiWithDay("พุธ");
    expect(result).toEqual(4);
  });

  test("Test Tamnai wiht day พฤหัสบดี", () => {
    const result = MahaLap.tamnaiWithDay("พฤหัสบดี");
    expect(result).toEqual(5);
  });

  test("Test Tamnai wiht day ศุกร์", () => {
    const result = MahaLap.tamnaiWithDay("ศุกร์");
    expect(result).toEqual(6);
  });

  test("Test Tamnai wiht day เสาร์", () => {
    const result = MahaLap.tamnaiWithDay("เสาร์");
    expect(result).toEqual(7);
  });

  test("Test Tamnai wiht day สงกรานต์", () => {
    const result = MahaLap.tamnaiWithDay("สงกรานต์");
    expect(result).toEqual(13);
  });

  test("Test Tamnai wiht day ฮาโลวีน", () => {
    const result = MahaLap.tamnaiWithDay("ฮาโลวีน");
    expect(result).toEqual(31);
  });

  test("Test Tamnai wiht day คริสมาสต์", () => {
    const result = MahaLap.tamnaiWithDay("คริสมาสต์");
    expect(result).toEqual(25);
  });
});
