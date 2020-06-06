import {Resolver} from '@nestjs/graphql';
import {UserService} from "./user.service";
import {User} from "../common/database/entities/user.entity";

@Resolver(User)
export class UsersResolver {

    constructor(
        private userService: UserService
    ) {}

    //
    // @ResolveProperty(() => [DashboardItem])
    // async dashboardItems(@Parent() user: User, @Context() {userDashboardItemsLoader}: IGraphQLContext) {
    //     return userDashboardItemsLoader.load(user.id);
    // }
    //
    // @ResolveProperty(() => [NoteBoard])
    // async noteBoards(@Parent() user: User, @Context() {userNoteDashboardsLoader}: IGraphQLContext) {
    //     return userNoteDashboardsLoader.load(user.id);
    // }
}
