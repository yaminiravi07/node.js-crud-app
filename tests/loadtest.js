import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 500,
  duration: '60s',
};

export default function () {

  const payload = JSON.stringify({
    name: 'test-user',
    description: 'load-testing'
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // CREATE request
  http.post(
    'http://127.0.0.1:50870/items',
    payload,
    params
  );

  // READ request
  http.get(
    'http://127.0.0.1:50870/items'
  );

  sleep(1);
}