import { Database } from '@vuex-orm/core';

import Question from '~/models/Question'

const database = new Database();

database.register(Question)

export default database;
