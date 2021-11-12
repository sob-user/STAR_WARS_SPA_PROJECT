import navigationReducer from "./navigationReducer";
import dataReducer from "./dataReducer";
import pageReducer from "./pageReducer";
import authReducer from "./authReducer";

const reducer =  {
    navigation: navigationReducer,
    data: dataReducer,
    page: pageReducer,
    auth: authReducer
};

export default reducer;
