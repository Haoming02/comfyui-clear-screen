from aiohttp import web
import server
import os

WEB_DIRECTORY = "js"
NODE_CLASS_MAPPINGS = {}
NODE_DISPLAY_NAME_MAPPINGS = {}


@server.PromptServer.instance.routes.get("/utils/cls")
async def clear_console(request):

    if os.name == "nt":
        os.system("cls")
    else:
        os.system("clear")

    return web.Response(status=200)
