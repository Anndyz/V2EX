
/* 基本配置 */
//
export const CODE_OK = 200

// const HOST_URI = 'https://www.v2ex.com/api/'
const HOST_URI=''
// 所有的节点
export const ALL_NODE = HOST_URI+'nodes/all.json';
// 获取节点信息 
// 节点id :id 节点名 :name
export const NODE_INFO = HOST_URI +'nodes/show.json';

// 获取主题
// 取最新的主题
export const LATEST_TOPIC = HOST_URI+'topics/latest.json';
// 获取热议主题
export const HOT_TOPIC = HOST_URI +'topics/hot.json';
// 获取主题信息  :id | (:username | :node_id | :node_name)
export const GET_TOPICS = HOST_URI + 'topics/show.json';

// 获取回复 :topic_id (:page , :page_size)?
export const GET_REPLIES = HOST_URI +'replies/show.json';

// 获取用户信息
export const GET_USERINFO = HOST_URI + 'members/show.json';
