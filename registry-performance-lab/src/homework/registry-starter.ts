import { performance } from 'node:perf_hooks';

/**
 * Homework: Real-World Performance Analysis (Starter)
 */

// TASK 1: Define a 'Student' interface with an id (number) and name (string)
interface Student {
    id: number;
    name: string;
}
class StudentRegistry {
    // TASK 2: Define a private array of Student objects
    private students: any[] = []; 

    addStudent(s: any): void {
        // TASK 3: Push student to the array
        s
    }

    /**
     * TASK 4: Linear Search O(n)
     * Requirement: Use a single loop to find a student by ID.
     */
    findStudentLinear(id: number): any | undefined {
        this.students.forEach(student => {
            if (student.id === id) {
                return student;
            }
        });
        return undefined;
    }

    /**
     * TASK 5: Quadratic Duplicate Check O(n^2)
     * Requirement: Use NESTED loops to compare every student against 
     * every other student to find if any names are duplicated.
     */
    hasDuplicateNames(): boolean {
        this.students.forEach((studentA, indexA) => {
            this.students.forEach((studentB, indexB) => {
                if (indexA !== indexB && studentA.name === studentB.name) {
                    return true;
                }
            });
        });
        return false;
    }

    /**
     * TASK 6: Performance Measurement
     * Fill in the start/end timers for both algorithms.
     */
    runPerformanceTest(): void {
        const testSizes = [10, 100, 1000, 5000];
        
        const results = testSizes.map(n => {
            this.students = [];
            for (let i = 0; i < n; i++) {
                this.addStudent({ id: i, name: `Student ${i}` });
            }

            // --- TIME THE LINEAR SEARCH ---
            // TODO: Start timer, hint, uses performance.now();
            const start = performance.now(); 
            this.findStudentLinear(-1); 
            // TODO: End timer
            const end = performance.now();
            //const linearTime = 0; // Replace with (end - start)
            const linearTime = end - start;

            // --- TIME THE QUADRATIC CHECK ---
            // TODO: Start timer
            const startQuad = performance.now();
            this.hasDuplicateNames();
            // TODO: End timer
            const endQuad = performance.now();
            const quadraticTime = endQuad - startQuad;

            return {
                "Input Size (n)": n.toLocaleString(),
                "Linear (ms)": linearTime.toFixed(4),
                "Quadratic (ms)": quadraticTime.toFixed(4)
            };
        });

        console.log("\n--- Lab Results: Algorithmic Growth ---");
        console.table(results);
    }
}

const registry = new StudentRegistry();
registry.runPerformanceTest();