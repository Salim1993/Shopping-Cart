import Streamer from "./Streamer"

const StreamerJsonFactory = () => {

    const createStreamerFromJson = (json) => {
        const thumbnail = json.thumbnail_url.replace("{width}", 200).replace("{height}", 200);
        return Streamer(json.user_name, thumbnail, json.viewer_count)
    }

    const createStreamerListFromJson = (json) => {
        if(!json) {
            return [];
        }
        const list = json.data.map(jsonObject => {
            return createStreamerFromJson(jsonObject)
        })

        return list;
    }

    return { createStreamerFromJson, createStreamerListFromJson }
}

export default StreamerJsonFactory;