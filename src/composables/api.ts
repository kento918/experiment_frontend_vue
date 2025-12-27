const baseurl = "api/v1";

export const getRequest = async (url: string) => {
   const res = await fetch(`${baseurl}/${url}`);
   return await res.json();
};

export const getRequestAddArr = async (url: string, data: any) => {
   const res = await fetch(`${baseurl}/${url}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
   });
   return await res.json();
};

export const postRequest = async (url: string, data: any) => {
   const res = await fetch(`${baseurl}/${url}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
   });
   return await res.json();
};

export const putRequest = async (url: string, data: any) => {
   const res = await fetch(`${baseurl}/${url}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
   });
   return await res.json();
};

export const deleteRequest = async (url: string) => {
   const res = await fetch(`${baseurl}/${url}`, {
      method: "DELETE",
   });
   return await res.json();
};
