import {Migration} from 'migrationjs';
import {Blueprint} from 'migrationjs';
import {Schema} from 'migrationjs';


export default class createUsersTable extends Migration {

    async up() {
        await Schema.create('users', (table: Blueprint) => {
            table.id();
            table.string('name').nullable();
            table.string('username').unique();
            table.string('password');
        })
    }

    async down(): Promise<void> {
        await Schema.dropIfExists('users');
    }
}
