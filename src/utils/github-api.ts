// Feel free to use something else than 'axios', for example 'ky'
import axios from 'axios';

export interface Repo {
  name: string;
  html_url: string;
  created_at: Date;
};
export type TRepoList = Repo[];

export interface Org {
  login: string;
};
export type TOrgList = Org[];

export interface UserInfo {
  login: string;
  html_url: string;
  name: string;
  company: string;
  public_repos: number;
  created_at: Date;
};

// Documentation is at https://developer.github.com/v3/
const BASE_URL = 'https://api.github.com';

function getRepos(username: string) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get<TRepoList>(url).then(response => response.data);
  // return axios.get(url).then(response => response.data);
}

function getUserData(username: string) {
  const url = `${BASE_URL}/users/${username}`;
  return axios.get<UserInfo>(url).then(response => response.data);
}

function getUserOrgs(username: string) {
  const url = `${BASE_URL}/users/${username}/orgs`;
  return axios.get<TOrgList>(url).then(response => response.data);
}

// function getUserData(username: string) {
//   return axios
//     .all([
//       axios.get<UserInfo>(`${BASE_URL}/users/${username}`),
//       axios.get<TOrgList>(`${BASE_URL}/users/${username}/orgs`)
//     ])
//     .then(([user, orgs]) => ({
//       user: user.data,
//       orgs: orgs.data
//     }));
// }

export { getRepos, getUserData, getUserOrgs };
