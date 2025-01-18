import * as fs from 'fs';
import * as path from 'path';
import { Database } from './types';

function fileReading(filename: string): Database | undefined {
    try {
        const filePath = path.join(__dirname, filename);
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        return data;
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
}

function updateUserBase(filename: string) {

}

export { fileReading };