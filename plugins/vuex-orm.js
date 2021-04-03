import VuexORM from '@vuex-orm/core';
import database from '~/models/database';

export default ({ store }) => {
  VuexORM.install(database)(store);
};
