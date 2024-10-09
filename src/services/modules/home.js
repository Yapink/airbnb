import hyRequest from "..";

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return hyRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommentData() {
  return hyRequest.get({
    url: "/home/hotRecommenddest"
  })
}

export function getHomeLongforData() {
  return hyRequest.get({
    url: "/home/longfor"
  })
}

export function getHomePlusData() {
  return hyRequest.get({
    url: "/home/plus"
  })
}