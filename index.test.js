const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Handles midday", () => {
    const timeInWords = convertTimeToWords("12:00");
    expect(timeInWords).toBe("midday");
  });
  it("Handles quarter past time - 10:15", () => {
    const timeInWords = convertTimeToWords("10:15");
    expect(timeInWords).toBe("quarter past ten");
  });
  it("Handles quarter to time - 10:45", () => {
    const timeInWords = convertTimeToWords("10:45");
    expect(timeInWords).toBe("quarter to eleven");
  });
  it("Handles past time 8:10", () => {
    const timeInWords = convertTimeToWords("08:10");
    expect(timeInWords).toBe("ten past eight");
  });

  it("Handles to time 8:40", () => {
    const timeInWords = convertTimeToWords("08:40");
    expect(timeInWords).toBe("twenty to nine");
  });
});
