export async function get(url) {
  try {
    const response = await fetch(url);
    if (response.ok != true) {
      const err = await response.json();
      throw err;
    }

    return await response.json();
  } catch (err) {
    alert(err.message);
  }
}

export async function post(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok != true) {
      const err = await response.json();
      throw err;
    }

    return await response.json();
  } catch (err) {
    alert(err.message);
  }
}

export async function put(url, data) {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok != true) {
      const err = await response.json();
      throw err;
    }

    return await response.json();
  } catch (err) {
    alert(err.message);
  }
}
