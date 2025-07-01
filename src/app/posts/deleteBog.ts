import config from "@/config";


const deleteBlog = async(id: string, userId: string, AuthToken: string) => {
      const res = await fetch(`${config.apiUrl}/posts/${id}`, {
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${AuthToken}` || ''
            },
            "body": JSON.stringify({userId})
      });

      const result = await res.json();
      return result;
} 

export default deleteBlog;