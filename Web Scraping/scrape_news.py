from splinter import Browser
from bs4 import BeautifulSoup

def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "chromedriver.exe"}
    return Browser("chrome", **executable_path, headless=False)

def scrape():
    browser = init_browser()
    listings = {}

    url = "https://weather.com/storms/tornado"
    browser.visit(url)

    html = browser.html
    soup = BeautifulSoup(html, "html.parser")

    listings["headline"] = soup.find("span", class_="styles__headline__1WDSw").get_text()
    listings["Date_Uploaded"] = soup.find("span", class_="styles__wxTitleWrapTimestamp__12-cd").get_text()
    extension = soup.find("div", class_="styles__wxMediaContent__37wjl").find("div", class_="styles__mobileHeadlineContainer__2LkPF").a['href']
    link = "https://weather.com"
    featured_url = link + extension
    print(featured_url)
    listings["featured_url"]=featured_url
    return listings


# extension = soup1.find("article").find("figure", class_="lede").a["href"]
#         link = "https://www.jpl.nasa.gov"
#         featured_image_url = link + extension
#         print(featured_image_url)
#         listings_news["featured_image_url"]=featured_image_url