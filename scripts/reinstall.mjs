import { execSync } from 'child_process';

try {
  console.log('Running pnpm install to regenerate lockfile...');
  const result = execSync('cd /vercel/share/v0-project && pnpm install', { 
    encoding: 'utf-8',
    stdio: 'pipe'
  });
  console.log(result);
  console.log('Done! Lockfile regenerated.');
} catch (error) {
  console.error('Error:', error.message);
  if (error.stdout) console.log('stdout:', error.stdout);
  if (error.stderr) console.log('stderr:', error.stderr);
}
