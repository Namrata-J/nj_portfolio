const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions) {
  // Extract repository name from GITHUB_REPOSITORY (e.g., Namrata-J/nj_portfolio)
  const repoName = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  repo = `/${repoName}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: repo,
  assetPrefix: repo,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: repo,
  },
};

export default nextConfig;
