import * as fs from 'fs';
import * as path from 'path';
import { Database } from './types';

export function fileReading(filename: string): Database {
    try {
        const filePath = path.join(__dirname, filename);
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        return data;
    } catch (error) {
        console.error('Error reading JSON file:', error);
        process.exit(1)  // Ends the program straight away is JSON file cannot be read
    }
}