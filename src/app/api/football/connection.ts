import { Pool } from 'pg';
import config from '@/config';

const poolConnection = new Pool({
  ...config.dbConnection
});

export default poolConnection;