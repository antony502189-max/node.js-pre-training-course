const fs = require('fs');

describe('Dockerfile for ToDo app', () => {
  it('should contain FROM node', () => {
    const dockerfile = fs.readFileSync('Docker-Git/solutions/task-01.dockerfile', 'utf8');
    expect(dockerfile).toMatch(/FROM node/i);
  });
});

describe('docker-compose.yml for ToDo app', () => {
  it('should contain service for mongo', () => {
    const compose = fs.readFileSync('Docker-Git/solutions/task-02.yml', 'utf8');
    expect(compose).toMatch(/mongo/i);
  });
});

describe('docker-compose.yml with volume', () => {
  it('should contain volumes', () => {
    const compose = fs.readFileSync('Docker-Git/solutions/task-03.yml', 'utf8');
    expect(compose).toMatch(/volumes?/i);
  });
});

describe('Dockerfile with NODE_ENV', () => {
  it('should contain ENV NODE_ENV', () => {
    const dockerfile = fs.readFileSync('Docker-Git/solutions/task-04.dockerfile', 'utf8');
    expect(dockerfile).toMatch(/ENV NODE_ENV/i);
  });
});

describe('docker-compose.yml with networking', () => {
  it('should contain depends_on or links', () => {
    const compose = fs.readFileSync('Docker-Git/solutions/task-05.yml', 'utf8');
    expect(compose).toMatch(/depends_on|links/i);
  });
});

describe('Git: init', () => {
  it('should mention git init', () => {
    const txt = fs.readFileSync('Docker-Git/solutions/task-06.txt', 'utf8');
    expect(txt).toMatch(/git init/i);
  });
});

describe('Git: commit', () => {
  it('should mention git commit', () => {
    const txt = fs.readFileSync('Docker-Git/solutions/task-07.txt', 'utf8');
    expect(txt).toMatch(/git commit/i);
  });
});

describe('Git: branch', () => {
  it('should mention git branch', () => {
    const txt = fs.readFileSync('Docker-Git/solutions/task-08.txt', 'utf8');
    expect(txt).toMatch(/git branch|git checkout -b/i);
  });
});

describe('Git: merge', () => {
  it('should mention git merge', () => {
    const txt = fs.readFileSync('Docker-Git/solutions/task-09.txt', 'utf8');
    expect(txt).toMatch(/git merge/i);
  });
});

describe('.gitignore for ToDo app', () => {
  it('should mention node_modules and .env', () => {
    const txt = fs.readFileSync('Docker-Git/solutions/task-10.gitignore', 'utf8');
    expect(txt).toMatch(/node_modules/);
    expect(txt).toMatch(/\.env/);
  });
}); 