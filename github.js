class Github {
    constructor() {
      this.client_id = 'e7c6f7ece86ffd1a4aa2';
      this.client_secret = '10d0751e505a730334f2bc92ce774449c1441841';

      
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
  
      return {
        profile
      }
    }
  }