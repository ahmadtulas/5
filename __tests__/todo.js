/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList;

describe("To do list test suits", () => {
  beforeAll(() => {
    const formattedDate = (d) => {
      return d.toISOString().split("T")[0];
    };
    var dateToday = new Date();
    const today = formattedDate(dateToday);
    const yesterday = formattedDate(
      new Date(new Date().setDate(dateToday.getDate() - 1))
    );
    const tomorrow = formattedDate(
      new Date(new Date().setDate(dateToday.getDate() + 1))
    );
    add({ title: "Pay wifi bill", dueDate: yesterday, completed: true });
    add({ title: "Pay electricity bill", dueDate: today, completed: true });
    add({ title: "Bike Service", dueDate: today, completed: false });
    add({ title: "Assisgnemnt", dueDate: tomorrow, completed: false });
    add({ title: "shopping", dueDate: tomorrow, completed: false });
  });
  test("should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "6th todo due today",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemCount + 1);
  });
  test("Should markAsComplete", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Check retrieval of overdue items", () => {
    expect(overdue().length).toEqual(1);
  });
  test("Check retrieval of due today items", () => {
    expect(dueToday().length).toEqual(3);
  });
  test("Check retrieval of due later items", () => {
    expect(dueLater().length).toEqual(2);
  });
});
