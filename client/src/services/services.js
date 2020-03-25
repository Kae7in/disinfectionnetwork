const rootUrl = process.env.NODE_ENV === "development" ? 'http://localhost:5000' : "https://disinfectconnect.com"

export default {
  getAllDistilleries: function() {
    return fetch(`${rootUrl}/distilleries`)
      .then(res => res.json())
  }
}