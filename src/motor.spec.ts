import {
  checkGameResult,
  GameResult,
  NextScenary,
  checkNextCardScenaryResult,
  getRandomIndex,
} from "./motor";

import { Card } from "./model";

import { vi } from "vitest";

describe("checkGameResult", () => {
  it("Debería retornar lose cuando la puntuación acumulada es mayor a la puntuación máxima", () => {
    // Arrange
    const resultadoEsperado: GameResult = "lose";
    const points: number = 8;

    // Act
    const result: GameResult = checkGameResult(points);
    // Assert
    expect(result).toBe(resultadoEsperado);
  });

  it("Debería retornar win cuando la puntuación acumulada es igual a la puntuación máxima", () => {
    // Arrange
    const resultadoEsperado: GameResult = "win";
    const points: number = 7.5;

    // Act
    const result: GameResult = checkGameResult(points);
    // Assert
    expect(result).toBe(resultadoEsperado);
  });

  it("Debería retornar continue cuando la puntuación acumulada es menor a la puntuación máxima", () => {
    // Arrange
    const resultadoEsperado: GameResult = "continue";
    const points: number = 7;

    // Act
    const result: GameResult = checkGameResult(points);
    // Assert
    expect(result).toBe(resultadoEsperado);
  });
});

describe("checkNextCardScenaryResult", () => {
  it("Debería retornar megafail cuando la puntuación acumulada es igual a la puntuación máxima", () => {
    // Arrange
    const resultadoEsperado: NextScenary = "megafail";
    const points: number = 7.5;

    // Act
    const result: NextScenary = checkNextCardScenaryResult(points);
    // Assert
    expect(result).toBe(resultadoEsperado);
  });

  it("Debería retornar fail cuando la puntuación acumulada es menor a la puntuación máxima", () => {
    // Arrange
    const resultadoEsperado: NextScenary = "fail";
    const points: number = 7;

    // Act
    const result: NextScenary = checkNextCardScenaryResult(points);
    // Assert
    expect(result).toBe(resultadoEsperado);
  });

  it("Debería retornar success cuando la puntuación acumulada es mayor a la puntuación máxima", () => {
    // Arrange
    const resultadoEsperado: NextScenary = "success";
    const points: number = 8;

    // Act
    const result: NextScenary = checkNextCardScenaryResult(points);

    // Assert
    expect(result).toBe(resultadoEsperado);
  });
});

describe("getRandomIndex", () => {
  it("Debería retornar un número aleatorio entre 0 y la longitud del array", () => {
    // Arrange
    const arr: Card[] = [
      { name: "test", value: 1 },
      { name: "test", value: 2 },
      { name: "test", value: 3 },
    ];
    const resultadoEsperado: number = 2;

    vi.spyOn(global.Math, "random").mockReturnValue(0.9999999999999999);

    // Act
    const result = getRandomIndex(arr);

    // Assert
    expect(result).toBe(resultadoEsperado);
  });
});
