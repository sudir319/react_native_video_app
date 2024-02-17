export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0ZGI1MDIzZS1mMjgzLTRhMTYtYTQ0OS0zOGVkMzIyODk2ZTEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwODE1Njc5MiwiZXhwIjoxNzA4NzYxNTkyfQ._Sqi6wurM39l20Xzh-5xqJIPQ3tlWRNxhP0fPCcoJ_Q';
// API call to create meeting
export const createMeeting = async ({token}) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: 'POST',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  const {roomId} = await res.json();
  return roomId;
};
