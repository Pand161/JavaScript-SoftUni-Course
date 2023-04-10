import { del, get, post, put } from './api.js';

const endpoints = {
  allTeams: '/data/teams',
  allMembers: '/data/members?where=status%3D%22member%22',
  memberships: (teamId) =>
    `/data/members?where=teamId%3D%22$${teamId}%22&load=user%3D_ownerId%3Ausers`,
  certainTeam: '/data/teams/:id',
  member: '/data/members',
  certainMember: '/data/members/:id',
  currentTeams: (userId) =>
    `/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`,
};

export async function getMyTeams() {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const userId = userData.id;

  const teamMembership = await get(endpoints.currentTeams(userId));
  const teams = teamMembership.map((r) => r.team);
  const members = await getMembers(teams.map((t) => t._id));

  teams.forEach(
    (t) => (t.memberCount = members.filter((m) => m.teamId == t._id).length)
  );
  return teams;
}

export async function getMembers(teamIds) {
  const query = encodeURIComponent(
    `teamId IN ("${teamIds.join('", "')}") AND status="member"`
  );
  return await get(`/data/members?where=${query}`);
}

export async function userCurrentTeams(userId) {
  return get(endpoints.currentTeams(userId));
}

export async function getTeams() {
  const teams = await get(endpoints.allTeams);
  const members = await getMembers(teams.map((t) => t._id));
  teams.forEach(
    (t) => (t.memberCount = members.filter((m) => m.teamId == t._id).length)
  );
  return teams;
}

export async function getAllMembers() {
  return get(endpoints.allMembers);
}

export async function postTeam(data) {
  return post(endpoints.allMembers, data);
}

export async function getCertainTeam(id) {
  return get(endpoints.certainTeam + id);
}

export async function putCertainTeam(id, data) {
  return put(endpoints.certainTeam + id, data);
}

export async function getMemberships(teamId) {
  return get(endpoints.memberships(teamId));
}

export async function reqForMembership(data) {
  return post(endpoints.member, data);
}

export async function acceptMembership(id) {
  const body = {
    teamId: id,
    status: 'member',
  };
  return put(endpoints.member + id, body);
}

export async function declineMembership(id) {
  return del(endpoints.member + id);
}
