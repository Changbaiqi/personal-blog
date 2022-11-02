package com.cbq.blogsserver.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    Integer id; //id
    String account; //用户的账号
    String password;    //用户的密码
    Integer power;  //用户的权限等级
}
