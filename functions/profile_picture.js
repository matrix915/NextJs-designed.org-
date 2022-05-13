addEventListener('fetch', event => {
    const { request } = event;
    const { url } = request;
  
    if (request.method === 'POST') {
      return event.respondWith(handleRequest(request));
    } else if (request.method === 'GET') {
      return event.respondWith(new Response(`The request was a GET`));
    }
  });
  
  
  /**
   * Many more examples available at:
   *   https://developers.cloudflare.com/workers/examples
   * @param {Request} request
   * @returns {Promise<Response>}
   */
  async function handleRequest(request) {
  
    const authToken = await request.headers.get("authorization");
  
    const formData = await request.formData();
  
    const oldImageId = formData.get("old_image_id");
  
    formData.delete("old_image_id");
  
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/63d719b39174eb1cfc9816ccf9a7512f/images/v1`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer i4BKmGPc4P_aGR7SwxFK_O_2RE5uYENV32UEJEFk`,
        },
      }
    );
  
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/63d719b39174eb1cfc9816ccf9a7512f/images/v1/${oldImageId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer i4BKmGPc4P_aGR7SwxFK_O_2RE5uYENV32UEJEFk`,
        },
      }
    );
  
    return response;
  }