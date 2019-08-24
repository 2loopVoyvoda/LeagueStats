import JaxRequest from '../JaxRequest'

class SummonerEnpoint {
  constructor(limiter, region) {
    this.limiter = limiter
    this.region = region
  }

  summonerName(summonerName) {
    return new JaxRequest(
      `summoner/v4/summoners/by-name/${encodeURI(summonerName)}`,
      this.limiter,
      this.region
    ).execute()
  }
}

export default SummonerEnpoint
