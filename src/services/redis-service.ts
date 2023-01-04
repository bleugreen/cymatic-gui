import { createClient } from 'redis';

const client = createClient({
    url: 'redis://:i88T#SEm1LslO*J$lA&n@127.0.0.1:7777'
  });

client.on('error', (err) => console.log('Redis Client Error', err));

export async function test(){
    await client.connect();
    await client.set('key', 'value345');
    const value = await client.get('key');
    await client.disconnect();
    return value;
}