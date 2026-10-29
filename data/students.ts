export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number; // 9 to 12
  average: number; // mark out of 100
}

// dummy data
export const students: Student[] = [
  { id: 1, firstName: "James", lastName: "Smith", grade: 12, average: 91 },
  { id: 2, firstName: "Liam", lastName: "Webber", grade: 12, average: 74 },
  { id: 3, firstName: "Sofia", lastName: "Reyes", grade: 11, average: 85 },
  { id: 4, firstName: "Noah", lastName: "Arks", grade: 11, average: 68 },
  { id: 5, firstName: "Emma", lastName: "Pebble", grade: 10, average: 79 },
  { id: 6, firstName: "Ethan", lastName: "Hunt", grade: 10, average: 88 },
  { id: 7, firstName: "Ava", lastName: "Maria", grade: 9, average: 72 },
  { id: 8, firstName: "Lucas", lastName: "Dubois", grade: 9, average: 65 },
  { id: 9, firstName: "Maya", lastName: "Bird", grade: 12, average: 83 },
  { id: 10, firstName: "Owen", lastName: "Owell", grade: 11, average: 77 },
];