package com.cbq.blogsserver.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Note {
    Integer id; //文章id
    String encode; //文章的唯一id号
    String title; //文章大标题
    String content; //文章的主体内容
    List<String> label; //作为文章的标签
    LocalDateTime createTime; //文章的创建时间
    LocalDateTime editLastTime; //文章最后的编辑时间
}
