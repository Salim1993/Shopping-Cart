import Streamer from "./Streamer"

const StreamerJsonFactory = () => {

    const createStreamerFromJson = (json) => {
        return Streamer(json.user_name, json.thumbnail_url, json.viewer_count)
    }

    const createStreamerListFromJson = (json) => {
        const list = json.data.map(jsonObject => {
            return createStreamerFromJson(jsonObject)
        })

        return list;
    }

    return { createStreamerFromJson, createStreamerListFromJson }
}

export default StreamerJsonFactory;