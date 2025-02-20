PGDMP  -    (                |            onlineshop4dvds    15.6    16.2 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16557    onlineshop4dvds    DATABASE     �   CREATE DATABASE onlineshop4dvds WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE onlineshop4dvds;
                postgres    false            �            1259    16612    album    TABLE     �   CREATE TABLE public.album (
    id integer NOT NULL,
    "artistId" integer,
    "lengthInSeconds" integer,
    "productId" integer
);
    DROP TABLE public.album;
       public         heap    postgres    false            �            1259    16618    album_genres_category    TABLE     q   CREATE TABLE public.album_genres_category (
    "albumId" integer NOT NULL,
    "categoryId" integer NOT NULL
);
 )   DROP TABLE public.album_genres_category;
       public         heap    postgres    false            �            1259    16611    album_id_seq    SEQUENCE     �   CREATE SEQUENCE public.album_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.album_id_seq;
       public          postgres    false    224            �           0    0    album_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.album_id_seq OWNED BY public.album.id;
          public          postgres    false    223            �            1259    16588    artist    TABLE     �   CREATE TABLE public.artist (
    id integer NOT NULL,
    "fullName" character varying(64) NOT NULL,
    dob date NOT NULL,
    nationality character varying(64) NOT NULL,
    avatar character varying
);
    DROP TABLE public.artist;
       public         heap    postgres    false            �            1259    16625    artist_albums_album    TABLE     m   CREATE TABLE public.artist_albums_album (
    "artistId" integer NOT NULL,
    "albumId" integer NOT NULL
);
 '   DROP TABLE public.artist_albums_album;
       public         heap    postgres    false            �            1259    16594    artist_categories_category    TABLE     w   CREATE TABLE public.artist_categories_category (
    "artistId" integer NOT NULL,
    "categoryId" integer NOT NULL
);
 .   DROP TABLE public.artist_categories_category;
       public         heap    postgres    false            �            1259    16587    artist_id_seq    SEQUENCE     �   CREATE SEQUENCE public.artist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.artist_id_seq;
       public          postgres    false    221            �           0    0    artist_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.artist_id_seq OWNED BY public.artist.id;
          public          postgres    false    220            �            1259    17780    cart    TABLE     6   CREATE TABLE public.cart (
    id integer NOT NULL
);
    DROP TABLE public.cart;
       public         heap    postgres    false            �            1259    17779    cart_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.cart_id_seq;
       public          postgres    false    242            �           0    0    cart_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;
          public          postgres    false    241            �            1259    17787    cart_product    TABLE     �   CREATE TABLE public.cart_product (
    id integer NOT NULL,
    quantity integer DEFAULT 1 NOT NULL,
    "cartId" integer,
    "productId" integer
);
     DROP TABLE public.cart_product;
       public         heap    postgres    false            �            1259    17786    cart_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cart_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.cart_product_id_seq;
       public          postgres    false    244            �           0    0    cart_product_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.cart_product_id_seq OWNED BY public.cart_product.id;
          public          postgres    false    243            �            1259    16579    category    TABLE     z   CREATE TABLE public.category (
    id integer NOT NULL,
    type integer NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.category;
       public         heap    postgres    false            �            1259    16578    category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.category_id_seq;
       public          postgres    false    219            �           0    0    category_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
          public          postgres    false    218            �            1259    16723    game    TABLE     j   CREATE TABLE public.game (
    id integer NOT NULL,
    "consoleType" integer,
    "productId" integer
);
    DROP TABLE public.game;
       public         heap    postgres    false            �            1259    16731    game_genres_category    TABLE     o   CREATE TABLE public.game_genres_category (
    "gameId" integer NOT NULL,
    "categoryId" integer NOT NULL
);
 (   DROP TABLE public.game_genres_category;
       public         heap    postgres    false            �            1259    16722    game_id_seq    SEQUENCE     �   CREATE SEQUENCE public.game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.game_id_seq;
       public          postgres    false    234            �           0    0    game_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.game_id_seq OWNED BY public.game.id;
          public          postgres    false    233            �            1259    16810    image    TABLE     t   CREATE TABLE public.image (
    id integer NOT NULL,
    url character varying NOT NULL,
    "productId" integer
);
    DROP TABLE public.image;
       public         heap    postgres    false            �            1259    16809    image_id_seq    SEQUENCE     �   CREATE SEQUENCE public.image_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.image_id_seq;
       public          postgres    false    239            �           0    0    image_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.image_id_seq OWNED BY public.image.id;
          public          postgres    false    238            �            1259    16699    movie    TABLE     �   CREATE TABLE public.movie (
    id integer NOT NULL,
    "lengthInMinutes" integer NOT NULL,
    "productId" integer,
    "imdbRatings" numeric
);
    DROP TABLE public.movie;
       public         heap    postgres    false            �            1259    16705    movie_genres_category    TABLE     q   CREATE TABLE public.movie_genres_category (
    "movieId" integer NOT NULL,
    "categoryId" integer NOT NULL
);
 )   DROP TABLE public.movie_genres_category;
       public         heap    postgres    false            �            1259    16698    movie_id_seq    SEQUENCE     �   CREATE SEQUENCE public.movie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.movie_id_seq;
       public          postgres    false    231            �           0    0    movie_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.movie_id_seq OWNED BY public.movie.id;
          public          postgres    false    230            �            1259    16568    product    TABLE     J  CREATE TABLE public.product (
    id integer NOT NULL,
    title character varying(256) NOT NULL,
    "yearReleased" integer NOT NULL,
    "thumbnailUrl" character varying NOT NULL,
    description character varying NOT NULL,
    stock integer DEFAULT 200 NOT NULL,
    "genreType" integer NOT NULL,
    price numeric NOT NULL
);
    DROP TABLE public.product;
       public         heap    postgres    false            �            1259    17168    product_genres_category    TABLE     u   CREATE TABLE public.product_genres_category (
    "productId" integer NOT NULL,
    "categoryId" integer NOT NULL
);
 +   DROP TABLE public.product_genres_category;
       public         heap    postgres    false            �            1259    16567    product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.product_id_seq;
       public          postgres    false    217            �           0    0    product_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
          public          postgres    false    216            �            1259    16786    review    TABLE       CREATE TABLE public.review (
    id integer NOT NULL,
    ratings smallint NOT NULL,
    content character varying,
    "userId" integer,
    "createdAt" timestamp with time zone DEFAULT '2024-03-17 14:39:28.379+07'::timestamp with time zone NOT NULL,
    "productId" integer
);
    DROP TABLE public.review;
       public         heap    postgres    false            �            1259    16785    review_id_seq    SEQUENCE     �   CREATE SEQUENCE public.review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.review_id_seq;
       public          postgres    false    237            �           0    0    review_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.review_id_seq OWNED BY public.review.id;
          public          postgres    false    236            �            1259    16663    song    TABLE     �   CREATE TABLE public.song (
    id integer NOT NULL,
    title character varying NOT NULL,
    released date NOT NULL,
    "lengthInSeconds" integer NOT NULL,
    "artistId" integer,
    "albumId" integer
);
    DROP TABLE public.song;
       public         heap    postgres    false            �            1259    16671    song_genres_category    TABLE     o   CREATE TABLE public.song_genres_category (
    "songId" integer NOT NULL,
    "categoryId" integer NOT NULL
);
 (   DROP TABLE public.song_genres_category;
       public         heap    postgres    false            �            1259    16662    song_id_seq    SEQUENCE     �   CREATE SEQUENCE public.song_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.song_id_seq;
       public          postgres    false    228            �           0    0    song_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.song_id_seq OWNED BY public.song.id;
          public          postgres    false    227            �            1259    16559    user    TABLE     t  CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    "normalizedEmail" character varying NOT NULL,
    "passwordHash" character varying NOT NULL,
    "isEmailActive" boolean DEFAULT false NOT NULL,
    "isAdmin" boolean DEFAULT false NOT NULL,
    "fullName" character varying(64) NOT NULL,
    "emailToken" character varying
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    16558    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    215            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    214            �           2604    16615    album id    DEFAULT     d   ALTER TABLE ONLY public.album ALTER COLUMN id SET DEFAULT nextval('public.album_id_seq'::regclass);
 7   ALTER TABLE public.album ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224            �           2604    16591 	   artist id    DEFAULT     f   ALTER TABLE ONLY public.artist ALTER COLUMN id SET DEFAULT nextval('public.artist_id_seq'::regclass);
 8   ALTER TABLE public.artist ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    17783    cart id    DEFAULT     b   ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);
 6   ALTER TABLE public.cart ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    242    242            �           2604    17790    cart_product id    DEFAULT     r   ALTER TABLE ONLY public.cart_product ALTER COLUMN id SET DEFAULT nextval('public.cart_product_id_seq'::regclass);
 >   ALTER TABLE public.cart_product ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    243    244    244            �           2604    16582    category id    DEFAULT     j   ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
 :   ALTER TABLE public.category ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    16726    game id    DEFAULT     b   ALTER TABLE ONLY public.game ALTER COLUMN id SET DEFAULT nextval('public.game_id_seq'::regclass);
 6   ALTER TABLE public.game ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    234    234            �           2604    16813    image id    DEFAULT     d   ALTER TABLE ONLY public.image ALTER COLUMN id SET DEFAULT nextval('public.image_id_seq'::regclass);
 7   ALTER TABLE public.image ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    239    238    239            �           2604    16702    movie id    DEFAULT     d   ALTER TABLE ONLY public.movie ALTER COLUMN id SET DEFAULT nextval('public.movie_id_seq'::regclass);
 7   ALTER TABLE public.movie ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    231    231            �           2604    16571 
   product id    DEFAULT     h   ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
 9   ALTER TABLE public.product ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    16789 	   review id    DEFAULT     f   ALTER TABLE ONLY public.review ALTER COLUMN id SET DEFAULT nextval('public.review_id_seq'::regclass);
 8   ALTER TABLE public.review ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    237    237            �           2604    16666    song id    DEFAULT     b   ALTER TABLE ONLY public.song ALTER COLUMN id SET DEFAULT nextval('public.song_id_seq'::regclass);
 6   ALTER TABLE public.song ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    16562    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �          0    16612    album 
   TABLE DATA           O   COPY public.album (id, "artistId", "lengthInSeconds", "productId") FROM stdin;
    public          postgres    false    224   Q�       �          0    16618    album_genres_category 
   TABLE DATA           H   COPY public.album_genres_category ("albumId", "categoryId") FROM stdin;
    public          postgres    false    225   ��       �          0    16588    artist 
   TABLE DATA           J   COPY public.artist (id, "fullName", dob, nationality, avatar) FROM stdin;
    public          postgres    false    221   ��       �          0    16625    artist_albums_album 
   TABLE DATA           D   COPY public.artist_albums_album ("artistId", "albumId") FROM stdin;
    public          postgres    false    226   ޽       �          0    16594    artist_categories_category 
   TABLE DATA           N   COPY public.artist_categories_category ("artistId", "categoryId") FROM stdin;
    public          postgres    false    222   ��       �          0    17780    cart 
   TABLE DATA           "   COPY public.cart (id) FROM stdin;
    public          postgres    false    242   K�       �          0    17787    cart_product 
   TABLE DATA           K   COPY public.cart_product (id, quantity, "cartId", "productId") FROM stdin;
    public          postgres    false    244   r�       �          0    16579    category 
   TABLE DATA           2   COPY public.category (id, type, name) FROM stdin;
    public          postgres    false    219   ;       �          0    16723    game 
   TABLE DATA           >   COPY public.game (id, "consoleType", "productId") FROM stdin;
    public          postgres    false    234   ��       �          0    16731    game_genres_category 
   TABLE DATA           F   COPY public.game_genres_category ("gameId", "categoryId") FROM stdin;
    public          postgres    false    235   .�       �          0    16810    image 
   TABLE DATA           5   COPY public.image (id, url, "productId") FROM stdin;
    public          postgres    false    239   K�       �          0    16699    movie 
   TABLE DATA           R   COPY public.movie (id, "lengthInMinutes", "productId", "imdbRatings") FROM stdin;
    public          postgres    false    231   ��       �          0    16705    movie_genres_category 
   TABLE DATA           H   COPY public.movie_genres_category ("movieId", "categoryId") FROM stdin;
    public          postgres    false    232   ��       �          0    16568    product 
   TABLE DATA           t   COPY public.product (id, title, "yearReleased", "thumbnailUrl", description, stock, "genreType", price) FROM stdin;
    public          postgres    false    217   �       �          0    17168    product_genres_category 
   TABLE DATA           L   COPY public.product_genres_category ("productId", "categoryId") FROM stdin;
    public          postgres    false    240   ,�       �          0    16786    review 
   TABLE DATA           Z   COPY public.review (id, ratings, content, "userId", "createdAt", "productId") FROM stdin;
    public          postgres    false    237   ��       �          0    16663    song 
   TABLE DATA           ]   COPY public.song (id, title, released, "lengthInSeconds", "artistId", "albumId") FROM stdin;
    public          postgres    false    228   ��       �          0    16671    song_genres_category 
   TABLE DATA           F   COPY public.song_genres_category ("songId", "categoryId") FROM stdin;
    public          postgres    false    229   ��       �          0    16559    user 
   TABLE DATA           �   COPY public."user" (id, email, "normalizedEmail", "passwordHash", "isEmailActive", "isAdmin", "fullName", "emailToken") FROM stdin;
    public          postgres    false    215   ��       �           0    0    album_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.album_id_seq', 17, true);
          public          postgres    false    223            �           0    0    artist_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.artist_id_seq', 13, true);
          public          postgres    false    220            �           0    0    cart_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.cart_id_seq', 6, true);
          public          postgres    false    241            �           0    0    cart_product_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.cart_product_id_seq', 17, true);
          public          postgres    false    243            �           0    0    category_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.category_id_seq', 41, true);
          public          postgres    false    218            �           0    0    game_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.game_id_seq', 24, true);
          public          postgres    false    233            �           0    0    image_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.image_id_seq', 2, true);
          public          postgres    false    238            �           0    0    movie_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.movie_id_seq', 17, true);
          public          postgres    false    230            �           0    0    product_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.product_id_seq', 13, true);
          public          postgres    false    216            �           0    0    review_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.review_id_seq', 1, true);
          public          postgres    false    236            �           0    0    song_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.song_id_seq', 10, true);
          public          postgres    false    227            �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 6, true);
          public          postgres    false    214            �           2606    16622 4   album_genres_category PK_02c870e4264b05d35331768099c 
   CONSTRAINT     �   ALTER TABLE ONLY public.album_genres_category
    ADD CONSTRAINT "PK_02c870e4264b05d35331768099c" PRIMARY KEY ("albumId", "categoryId");
 `   ALTER TABLE ONLY public.album_genres_category DROP CONSTRAINT "PK_02c870e4264b05d35331768099c";
       public            postgres    false    225    225            �           2606    16793 %   review PK_2e4299a343a81574217255c00ca 
   CONSTRAINT     e   ALTER TABLE ONLY public.review
    ADD CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.review DROP CONSTRAINT "PK_2e4299a343a81574217255c00ca";
       public            postgres    false    237            �           2606    16735 3   game_genres_category PK_2e8976eaf4574d559d6aa04bca1 
   CONSTRAINT     �   ALTER TABLE ONLY public.game_genres_category
    ADD CONSTRAINT "PK_2e8976eaf4574d559d6aa04bca1" PRIMARY KEY ("gameId", "categoryId");
 _   ALTER TABLE ONLY public.game_genres_category DROP CONSTRAINT "PK_2e8976eaf4574d559d6aa04bca1";
       public            postgres    false    235    235            �           2606    16730 #   game PK_352a30652cd352f552fef73dec5 
   CONSTRAINT     c   ALTER TABLE ONLY public.game
    ADD CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.game DROP CONSTRAINT "PK_352a30652cd352f552fef73dec5";
       public            postgres    false    234            �           2606    16598 9   artist_categories_category PK_51a9a0f3e2d740acfbbf5ba5537 
   CONSTRAINT     �   ALTER TABLE ONLY public.artist_categories_category
    ADD CONSTRAINT "PK_51a9a0f3e2d740acfbbf5ba5537" PRIMARY KEY ("artistId", "categoryId");
 e   ALTER TABLE ONLY public.artist_categories_category DROP CONSTRAINT "PK_51a9a0f3e2d740acfbbf5ba5537";
       public            postgres    false    222    222            �           2606    16593 %   artist PK_55b76e71568b5db4d01d3e394ed 
   CONSTRAINT     e   ALTER TABLE ONLY public.artist
    ADD CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.artist DROP CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed";
       public            postgres    false    221            �           2606    16617 $   album PK_58e0b4b8a31bb897e6959fe3206 
   CONSTRAINT     d   ALTER TABLE ONLY public.album
    ADD CONSTRAINT "PK_58e0b4b8a31bb897e6959fe3206" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.album DROP CONSTRAINT "PK_58e0b4b8a31bb897e6959fe3206";
       public            postgres    false    224            �           2606    16586 '   category PK_9c4e4a89e3674fc9f382d733f03 
   CONSTRAINT     g   ALTER TABLE ONLY public.category
    ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.category DROP CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03";
       public            postgres    false    219            �           2606    16709 4   movie_genres_category PK_aa94843bdc7c4d6d3210d1b84c3 
   CONSTRAINT     �   ALTER TABLE ONLY public.movie_genres_category
    ADD CONSTRAINT "PK_aa94843bdc7c4d6d3210d1b84c3" PRIMARY KEY ("movieId", "categoryId");
 `   ALTER TABLE ONLY public.movie_genres_category DROP CONSTRAINT "PK_aa94843bdc7c4d6d3210d1b84c3";
       public            postgres    false    232    232            �           2606    16670 #   song PK_baaa977f861cce6ff954ccee285 
   CONSTRAINT     c   ALTER TABLE ONLY public.song
    ADD CONSTRAINT "PK_baaa977f861cce6ff954ccee285" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.song DROP CONSTRAINT "PK_baaa977f861cce6ff954ccee285";
       public            postgres    false    228            �           2606    16575 &   product PK_bebc9158e480b949565b4dc7a82 
   CONSTRAINT     f   ALTER TABLE ONLY public.product
    ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.product DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82";
       public            postgres    false    217                        2606    17785 #   cart PK_c524ec48751b9b5bcfbf6e59be7 
   CONSTRAINT     c   ALTER TABLE ONLY public.cart
    ADD CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY (id);
 O   ALTER TABLE ONLY public.cart DROP CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7";
       public            postgres    false    242            �           2606    17172 6   product_genres_category PK_c9778bb46c6e52120813cce14aa 
   CONSTRAINT     �   ALTER TABLE ONLY public.product_genres_category
    ADD CONSTRAINT "PK_c9778bb46c6e52120813cce14aa" PRIMARY KEY ("productId", "categoryId");
 b   ALTER TABLE ONLY public.product_genres_category DROP CONSTRAINT "PK_c9778bb46c6e52120813cce14aa";
       public            postgres    false    240    240            �           2606    16566 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            postgres    false    215            �           2606    16704 $   movie PK_cb3bb4d61cf764dc035cbedd422 
   CONSTRAINT     d   ALTER TABLE ONLY public.movie
    ADD CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.movie DROP CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422";
       public            postgres    false    231            �           2606    16675 3   song_genres_category PK_d0004cefba6ddda9660ef140ba2 
   CONSTRAINT     �   ALTER TABLE ONLY public.song_genres_category
    ADD CONSTRAINT "PK_d0004cefba6ddda9660ef140ba2" PRIMARY KEY ("songId", "categoryId");
 _   ALTER TABLE ONLY public.song_genres_category DROP CONSTRAINT "PK_d0004cefba6ddda9660ef140ba2";
       public            postgres    false    229    229            �           2606    16817 $   image PK_d6db1ab4ee9ad9dbe86c64e4cc3 
   CONSTRAINT     d   ALTER TABLE ONLY public.image
    ADD CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.image DROP CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3";
       public            postgres    false    239                       2606    17793 +   cart_product PK_dccd1ec2d6f5644a69adf163bc1 
   CONSTRAINT     k   ALTER TABLE ONLY public.cart_product
    ADD CONSTRAINT "PK_dccd1ec2d6f5644a69adf163bc1" PRIMARY KEY (id);
 W   ALTER TABLE ONLY public.cart_product DROP CONSTRAINT "PK_dccd1ec2d6f5644a69adf163bc1";
       public            postgres    false    244            �           2606    16629 2   artist_albums_album PK_f09d2862fc9ef64ec0ddeea28ec 
   CONSTRAINT     �   ALTER TABLE ONLY public.artist_albums_album
    ADD CONSTRAINT "PK_f09d2862fc9ef64ec0ddeea28ec" PRIMARY KEY ("artistId", "albumId");
 ^   ALTER TABLE ONLY public.artist_albums_album DROP CONSTRAINT "PK_f09d2862fc9ef64ec0ddeea28ec";
       public            postgres    false    226    226            �           2606    17241 #   game UQ_06706a602a3154b6e7c94675d09 
   CONSTRAINT     g   ALTER TABLE ONLY public.game
    ADD CONSTRAINT "UQ_06706a602a3154b6e7c94675d09" UNIQUE ("productId");
 O   ALTER TABLE ONLY public.game DROP CONSTRAINT "UQ_06706a602a3154b6e7c94675d09";
       public            postgres    false    234            �           2606    17177 $   album UQ_42e23d266c98f8b85a40ec9b726 
   CONSTRAINT     h   ALTER TABLE ONLY public.album
    ADD CONSTRAINT "UQ_42e23d266c98f8b85a40ec9b726" UNIQUE ("productId");
 P   ALTER TABLE ONLY public.album DROP CONSTRAINT "UQ_42e23d266c98f8b85a40ec9b726";
       public            postgres    false    224            �           2606    17179 $   movie UQ_684f6a890a0b5e5511567a20c61 
   CONSTRAINT     h   ALTER TABLE ONLY public.movie
    ADD CONSTRAINT "UQ_684f6a890a0b5e5511567a20c61" UNIQUE ("productId");
 P   ALTER TABLE ONLY public.movie DROP CONSTRAINT "UQ_684f6a890a0b5e5511567a20c61";
       public            postgres    false    231            �           1259    16623    IDX_067c3715114efa9457a57f4f7d    INDEX     g   CREATE INDEX "IDX_067c3715114efa9457a57f4f7d" ON public.album_genres_category USING btree ("albumId");
 4   DROP INDEX public."IDX_067c3715114efa9457a57f4f7d";
       public            postgres    false    225            �           1259    16710    IDX_07fcc2cac76e522cd3255f9cc8    INDEX     g   CREATE INDEX "IDX_07fcc2cac76e522cd3255f9cc8" ON public.movie_genres_category USING btree ("movieId");
 4   DROP INDEX public."IDX_07fcc2cac76e522cd3255f9cc8";
       public            postgres    false    232            �           1259    16630    IDX_0fc3b07e8f297e7450d86dd502    INDEX     f   CREATE INDEX "IDX_0fc3b07e8f297e7450d86dd502" ON public.artist_albums_album USING btree ("artistId");
 4   DROP INDEX public."IDX_0fc3b07e8f297e7450d86dd502";
       public            postgres    false    226            �           1259    16676    IDX_281bb13c5648c5d56955d579ed    INDEX     e   CREATE INDEX "IDX_281bb13c5648c5d56955d579ed" ON public.song_genres_category USING btree ("songId");
 4   DROP INDEX public."IDX_281bb13c5648c5d56955d579ed";
       public            postgres    false    229            �           1259    16600    IDX_3e9000a5c1976a9b8e0e376e69    INDEX     o   CREATE INDEX "IDX_3e9000a5c1976a9b8e0e376e69" ON public.artist_categories_category USING btree ("categoryId");
 4   DROP INDEX public."IDX_3e9000a5c1976a9b8e0e376e69";
       public            postgres    false    222            �           1259    16599    IDX_4b6573038317df0c05f6ed76e0    INDEX     m   CREATE INDEX "IDX_4b6573038317df0c05f6ed76e0" ON public.artist_categories_category USING btree ("artistId");
 4   DROP INDEX public."IDX_4b6573038317df0c05f6ed76e0";
       public            postgres    false    222            �           1259    16737    IDX_66a227b473acf6ba37635e66d6    INDEX     i   CREATE INDEX "IDX_66a227b473acf6ba37635e66d6" ON public.game_genres_category USING btree ("categoryId");
 4   DROP INDEX public."IDX_66a227b473acf6ba37635e66d6";
       public            postgres    false    235            �           1259    16736    IDX_85f8ba8bffc580e3efce82b572    INDEX     e   CREATE INDEX "IDX_85f8ba8bffc580e3efce82b572" ON public.game_genres_category USING btree ("gameId");
 4   DROP INDEX public."IDX_85f8ba8bffc580e3efce82b572";
       public            postgres    false    235            �           1259    16711    IDX_8b7a1f973ec185aaf834549ec6    INDEX     j   CREATE INDEX "IDX_8b7a1f973ec185aaf834549ec6" ON public.movie_genres_category USING btree ("categoryId");
 4   DROP INDEX public."IDX_8b7a1f973ec185aaf834549ec6";
       public            postgres    false    232            �           1259    16677    IDX_b5cd1f793a9348afffadbfb9c1    INDEX     i   CREATE INDEX "IDX_b5cd1f793a9348afffadbfb9c1" ON public.song_genres_category USING btree ("categoryId");
 4   DROP INDEX public."IDX_b5cd1f793a9348afffadbfb9c1";
       public            postgres    false    229            �           1259    17173    IDX_c060a202126374f9de928deeaf    INDEX     k   CREATE INDEX "IDX_c060a202126374f9de928deeaf" ON public.product_genres_category USING btree ("productId");
 4   DROP INDEX public."IDX_c060a202126374f9de928deeaf";
       public            postgres    false    240            �           1259    16624    IDX_ce66256b828dd3025717bac666    INDEX     j   CREATE INDEX "IDX_ce66256b828dd3025717bac666" ON public.album_genres_category USING btree ("categoryId");
 4   DROP INDEX public."IDX_ce66256b828dd3025717bac666";
       public            postgres    false    225            �           1259    16631    IDX_e431e3a12c7375c760ef8a92f4    INDEX     e   CREATE INDEX "IDX_e431e3a12c7375c760ef8a92f4" ON public.artist_albums_album USING btree ("albumId");
 4   DROP INDEX public."IDX_e431e3a12c7375c760ef8a92f4";
       public            postgres    false    226            �           1259    17174    IDX_e4d7a704d87df61af442ddc7de    INDEX     l   CREATE INDEX "IDX_e4d7a704d87df61af442ddc7de" ON public.product_genres_category USING btree ("categoryId");
 4   DROP INDEX public."IDX_e4d7a704d87df61af442ddc7de";
       public            postgres    false    240                       2606    17243 #   game FK_06706a602a3154b6e7c94675d09    FK CONSTRAINT     �   ALTER TABLE ONLY public.game
    ADD CONSTRAINT "FK_06706a602a3154b6e7c94675d09" FOREIGN KEY ("productId") REFERENCES public.product(id);
 O   ALTER TABLE ONLY public.game DROP CONSTRAINT "FK_06706a602a3154b6e7c94675d09";
       public          postgres    false    217    3276    234                       2606    16632 4   album_genres_category FK_067c3715114efa9457a57f4f7de    FK CONSTRAINT     �   ALTER TABLE ONLY public.album_genres_category
    ADD CONSTRAINT "FK_067c3715114efa9457a57f4f7de" FOREIGN KEY ("albumId") REFERENCES public.album(id) ON UPDATE CASCADE ON DELETE CASCADE;
 `   ALTER TABLE ONLY public.album_genres_category DROP CONSTRAINT "FK_067c3715114efa9457a57f4f7de";
       public          postgres    false    3286    224    225                       2606    16712 4   movie_genres_category FK_07fcc2cac76e522cd3255f9cc8c    FK CONSTRAINT     �   ALTER TABLE ONLY public.movie_genres_category
    ADD CONSTRAINT "FK_07fcc2cac76e522cd3255f9cc8c" FOREIGN KEY ("movieId") REFERENCES public.movie(id) ON UPDATE CASCADE ON DELETE CASCADE;
 `   ALTER TABLE ONLY public.movie_genres_category DROP CONSTRAINT "FK_07fcc2cac76e522cd3255f9cc8c";
       public          postgres    false    232    231    3304            	           2606    16642 2   artist_albums_album FK_0fc3b07e8f297e7450d86dd502e    FK CONSTRAINT     �   ALTER TABLE ONLY public.artist_albums_album
    ADD CONSTRAINT "FK_0fc3b07e8f297e7450d86dd502e" FOREIGN KEY ("artistId") REFERENCES public.artist(id) ON UPDATE CASCADE ON DELETE CASCADE;
 ^   ALTER TABLE ONLY public.artist_albums_album DROP CONSTRAINT "FK_0fc3b07e8f297e7450d86dd502e";
       public          postgres    false    3280    221    226                       2606    16794 %   review FK_1337f93918c70837d3cea105d39    FK CONSTRAINT     �   ALTER TABLE ONLY public.review
    ADD CONSTRAINT "FK_1337f93918c70837d3cea105d39" FOREIGN KEY ("userId") REFERENCES public."user"(id);
 Q   ALTER TABLE ONLY public.review DROP CONSTRAINT "FK_1337f93918c70837d3cea105d39";
       public          postgres    false    215    237    3274                       2606    17795 +   cart_product FK_139f8024067696fe5a8400ebda2    FK CONSTRAINT     �   ALTER TABLE ONLY public.cart_product
    ADD CONSTRAINT "FK_139f8024067696fe5a8400ebda2" FOREIGN KEY ("cartId") REFERENCES public.cart(id);
 W   ALTER TABLE ONLY public.cart_product DROP CONSTRAINT "FK_139f8024067696fe5a8400ebda2";
       public          postgres    false    244    242    3328                       2606    16688 3   song_genres_category FK_281bb13c5648c5d56955d579ed6    FK CONSTRAINT     �   ALTER TABLE ONLY public.song_genres_category
    ADD CONSTRAINT "FK_281bb13c5648c5d56955d579ed6" FOREIGN KEY ("songId") REFERENCES public.song(id) ON UPDATE CASCADE ON DELETE CASCADE;
 _   ALTER TABLE ONLY public.song_genres_category DROP CONSTRAINT "FK_281bb13c5648c5d56955d579ed6";
       public          postgres    false    229    228    3298                       2606    17214 %   review FK_2a11d3c0ea1b2b5b1790f762b9a    FK CONSTRAINT     �   ALTER TABLE ONLY public.review
    ADD CONSTRAINT "FK_2a11d3c0ea1b2b5b1790f762b9a" FOREIGN KEY ("productId") REFERENCES public.product(id);
 Q   ALTER TABLE ONLY public.review DROP CONSTRAINT "FK_2a11d3c0ea1b2b5b1790f762b9a";
       public          postgres    false    217    237    3276                       2606    16657 $   album FK_3d06f25148a4a880b429e3bc839    FK CONSTRAINT     �   ALTER TABLE ONLY public.album
    ADD CONSTRAINT "FK_3d06f25148a4a880b429e3bc839" FOREIGN KEY ("artistId") REFERENCES public.artist(id);
 P   ALTER TABLE ONLY public.album DROP CONSTRAINT "FK_3d06f25148a4a880b429e3bc839";
       public          postgres    false    221    3280    224                       2606    16606 9   artist_categories_category FK_3e9000a5c1976a9b8e0e376e69b    FK CONSTRAINT     �   ALTER TABLE ONLY public.artist_categories_category
    ADD CONSTRAINT "FK_3e9000a5c1976a9b8e0e376e69b" FOREIGN KEY ("categoryId") REFERENCES public.category(id) ON UPDATE CASCADE ON DELETE CASCADE;
 e   ALTER TABLE ONLY public.artist_categories_category DROP CONSTRAINT "FK_3e9000a5c1976a9b8e0e376e69b";
       public          postgres    false    222    219    3278                       2606    17183 $   album FK_42e23d266c98f8b85a40ec9b726    FK CONSTRAINT     �   ALTER TABLE ONLY public.album
    ADD CONSTRAINT "FK_42e23d266c98f8b85a40ec9b726" FOREIGN KEY ("productId") REFERENCES public.product(id);
 P   ALTER TABLE ONLY public.album DROP CONSTRAINT "FK_42e23d266c98f8b85a40ec9b726";
       public          postgres    false    3276    217    224                       2606    16601 9   artist_categories_category FK_4b6573038317df0c05f6ed76e08    FK CONSTRAINT     �   ALTER TABLE ONLY public.artist_categories_category
    ADD CONSTRAINT "FK_4b6573038317df0c05f6ed76e08" FOREIGN KEY ("artistId") REFERENCES public.artist(id) ON UPDATE CASCADE ON DELETE CASCADE;
 e   ALTER TABLE ONLY public.artist_categories_category DROP CONSTRAINT "FK_4b6573038317df0c05f6ed76e08";
       public          postgres    false    222    3280    221                       2606    17800 +   cart_product FK_4f1b0c66f4e0b4610e14ca42e5c    FK CONSTRAINT     �   ALTER TABLE ONLY public.cart_product
    ADD CONSTRAINT "FK_4f1b0c66f4e0b4610e14ca42e5c" FOREIGN KEY ("productId") REFERENCES public.product(id);
 W   ALTER TABLE ONLY public.cart_product DROP CONSTRAINT "FK_4f1b0c66f4e0b4610e14ca42e5c";
       public          postgres    false    217    244    3276                       2606    16743 3   game_genres_category FK_66a227b473acf6ba37635e66d64    FK CONSTRAINT     �   ALTER TABLE ONLY public.game_genres_category
    ADD CONSTRAINT "FK_66a227b473acf6ba37635e66d64" FOREIGN KEY ("categoryId") REFERENCES public.category(id) ON UPDATE CASCADE ON DELETE CASCADE;
 _   ALTER TABLE ONLY public.game_genres_category DROP CONSTRAINT "FK_66a227b473acf6ba37635e66d64";
       public          postgres    false    219    3278    235                       2606    17188 $   movie FK_684f6a890a0b5e5511567a20c61    FK CONSTRAINT     �   ALTER TABLE ONLY public.movie
    ADD CONSTRAINT "FK_684f6a890a0b5e5511567a20c61" FOREIGN KEY ("productId") REFERENCES public.product(id);
 P   ALTER TABLE ONLY public.movie DROP CONSTRAINT "FK_684f6a890a0b5e5511567a20c61";
       public          postgres    false    3276    217    231                       2606    16738 3   game_genres_category FK_85f8ba8bffc580e3efce82b572a    FK CONSTRAINT     �   ALTER TABLE ONLY public.game_genres_category
    ADD CONSTRAINT "FK_85f8ba8bffc580e3efce82b572a" FOREIGN KEY ("gameId") REFERENCES public.game(id) ON UPDATE CASCADE ON DELETE CASCADE;
 _   ALTER TABLE ONLY public.game_genres_category DROP CONSTRAINT "FK_85f8ba8bffc580e3efce82b572a";
       public          postgres    false    234    3312    235                       2606    16717 4   movie_genres_category FK_8b7a1f973ec185aaf834549ec6f    FK CONSTRAINT     �   ALTER TABLE ONLY public.movie_genres_category
    ADD CONSTRAINT "FK_8b7a1f973ec185aaf834549ec6f" FOREIGN KEY ("categoryId") REFERENCES public.category(id) ON UPDATE CASCADE ON DELETE CASCADE;
 `   ALTER TABLE ONLY public.movie_genres_category DROP CONSTRAINT "FK_8b7a1f973ec185aaf834549ec6f";
       public          postgres    false    219    232    3278                       2606    16693 3   song_genres_category FK_b5cd1f793a9348afffadbfb9c1f    FK CONSTRAINT     �   ALTER TABLE ONLY public.song_genres_category
    ADD CONSTRAINT "FK_b5cd1f793a9348afffadbfb9c1f" FOREIGN KEY ("categoryId") REFERENCES public.category(id) ON UPDATE CASCADE ON DELETE CASCADE;
 _   ALTER TABLE ONLY public.song_genres_category DROP CONSTRAINT "FK_b5cd1f793a9348afffadbfb9c1f";
       public          postgres    false    3278    219    229                       2606    17198 6   product_genres_category FK_c060a202126374f9de928deeafb    FK CONSTRAINT     �   ALTER TABLE ONLY public.product_genres_category
    ADD CONSTRAINT "FK_c060a202126374f9de928deeafb" FOREIGN KEY ("productId") REFERENCES public.product(id) ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public.product_genres_category DROP CONSTRAINT "FK_c060a202126374f9de928deeafb";
       public          postgres    false    240    217    3276                       2606    16683 #   song FK_c529927ae410af49faaf2e239a5    FK CONSTRAINT     �   ALTER TABLE ONLY public.song
    ADD CONSTRAINT "FK_c529927ae410af49faaf2e239a5" FOREIGN KEY ("albumId") REFERENCES public.album(id);
 O   ALTER TABLE ONLY public.song DROP CONSTRAINT "FK_c529927ae410af49faaf2e239a5";
       public          postgres    false    3286    224    228                       2606    17209 $   image FK_c6eb61588205e25a848ba6105cd    FK CONSTRAINT     �   ALTER TABLE ONLY public.image
    ADD CONSTRAINT "FK_c6eb61588205e25a848ba6105cd" FOREIGN KEY ("productId") REFERENCES public.product(id);
 P   ALTER TABLE ONLY public.image DROP CONSTRAINT "FK_c6eb61588205e25a848ba6105cd";
       public          postgres    false    217    3276    239                       2606    16637 4   album_genres_category FK_ce66256b828dd3025717bac666b    FK CONSTRAINT     �   ALTER TABLE ONLY public.album_genres_category
    ADD CONSTRAINT "FK_ce66256b828dd3025717bac666b" FOREIGN KEY ("categoryId") REFERENCES public.category(id) ON UPDATE CASCADE ON DELETE CASCADE;
 `   ALTER TABLE ONLY public.album_genres_category DROP CONSTRAINT "FK_ce66256b828dd3025717bac666b";
       public          postgres    false    225    219    3278            
           2606    16652 2   artist_albums_album FK_e431e3a12c7375c760ef8a92f45    FK CONSTRAINT     �   ALTER TABLE ONLY public.artist_albums_album
    ADD CONSTRAINT "FK_e431e3a12c7375c760ef8a92f45" FOREIGN KEY ("albumId") REFERENCES public.album(id) ON DELETE CASCADE;
 ^   ALTER TABLE ONLY public.artist_albums_album DROP CONSTRAINT "FK_e431e3a12c7375c760ef8a92f45";
       public          postgres    false    224    226    3286                       2606    17203 6   product_genres_category FK_e4d7a704d87df61af442ddc7de2    FK CONSTRAINT     �   ALTER TABLE ONLY public.product_genres_category
    ADD CONSTRAINT "FK_e4d7a704d87df61af442ddc7de2" FOREIGN KEY ("categoryId") REFERENCES public.category(id) ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public.product_genres_category DROP CONSTRAINT "FK_e4d7a704d87df61af442ddc7de2";
       public          postgres    false    240    3278    219                       2606    16678 #   song FK_fe76da76684ccb3d70d0f75994e    FK CONSTRAINT     �   ALTER TABLE ONLY public.song
    ADD CONSTRAINT "FK_fe76da76684ccb3d70d0f75994e" FOREIGN KEY ("artistId") REFERENCES public.artist(id);
 O   ALTER TABLE ONLY public.song DROP CONSTRAINT "FK_fe76da76684ccb3d70d0f75994e";
       public          postgres    false    221    3280    228            �   4   x���  �wR�#D{��:���]°"���,8-:+ۋ��Ro�A��jV      �      x�3�4� c�=... 8!      �     x����n�0���Sd5�f��i�(T $�Da����Ϙ��(I/��8SĆM[/"˱���9�|�S?N��C�������K�c(��z�grX������v�i�Ʊ+��������@��i�*r�A{�MtFyd�� ����e��S%y�2�2N�� 	�� �Y �w܂e
�E��J�	��T�|�땟b%\���lD�)��0�g���Zi�B��\��/�\���"�g_��;�결"�D�	2��'�����f}�j��^��Mv���θ�������a�\#7-g�P��X�m��sE�v�c�~n���-3N��iL�:�\�Q�J7B�(u����q��sˮN7q�;�$�8��8)1C������7�����y�˲�ݐfj�U�|@�`X��5cn�+&�b82a�� �oj���͖QG�M��h>VB¿�M+��2�G�\�1E�|͜K��'���0֐���N�9��V)J��Ǡu�P�s��N���|��}��ۘ�����U�`�d!�ޜu:K�]f�(�1*�kK)�/G      �      x������ � �      �   @   x����0�j�0��cv��sDv!�(p���T"ɱ�뒣F��x/� s��F�{$�v�      �      x�3�2�2�2�2����� ��      �   K   x�%��� �s<L��K���&(?[q�s��%R���Zʭ^����@68@�����"�W֕�fK�jl|���y      �     x�M��n�0��٧��[+l'�[(�ZUB�c/Vp��؋��D����CO�ƻ;;�.�ŖOT��i҂K���_R���$3��a � }<ʈYJ���p���9]���9%N�*�s�=GR3�:�`Í_m�]�д��7���M~��{��w����w,H+)$�Z�s� e���lϘ)e7}@�"��D��g�.v�7�s�?�������jߧ��؎�TT�<֌�����92ZLnɍgی=�L��w���������*卵?gF�R��'N�L�OD��1n�      �   %   x�32�B.##m�ed�	dq����\1z\\\ `��      �      x������ � �      �   \   x�3��())(������MM�L�M�M����K�����MLO-��Է04�(,0�J��ы�1450���*H���2"������RsLb���� ��*|      �   6   x�Ǳ� ����/#�z��:�x���3hz�r�J�M�gP7�\����I���      �      x������ � �      �     x��X�n��}��b���"E]lI��Nr�$Nb�I� �9$'"9<3C1�������q>�|I�ޣ�}�-��-�e_�^{�9ܤ�n�Jٟ�������tPzߺG����j�f��x��o^��~yTaqT��VQ���)��L�Z6�IӮ�*צ�M&�����V���V<>8�s�jIG�7n����ʬ�U�+��Z9��&U�������N�P�v��]�T	�{l��o�st�/���U֩���4b���k�U�x0I��>����t�V����_��0`�3]��|��mwn�f�ȕ��Rn�Nn+coz���xJ4���>ЖO�$�����n�2>[&���t1�s��Gd��_|)��2m��V]�7z��B!V�i�=¥����E0B��x���9%a�E\W�����qBϖ'��;�~"�Z�ltQz�v�m��e�n>�)Q��њW[�`H��4��7Bw^�5��*�v���
�DZJ�	�Ze�J	��gƗ���$Q!B��j=��
Z_�4ϑp۴4�)t*+>�-����m �ȕ��G���tD�3�֩:``���,8"�L�K�c����x�]�7��ǣد=D�N����o��d�1�������V�Jd�F:����� )a�[S��N�z����n�U�}cUե^6^8�|��'�Ki�}i:�����C��qgW���*�9�Sǲ;⹵&��nT�!�SIg|b�b;[iU�?�q�O��i:��i4=���L-d�:K�Qz6���DM�yܫUˠ?��&g����J��#�ERԂWע����K3�w�<���Y�kX?oҪCL�X7�5����ڨ!J��TZT�a<A
�1�vS,(vJ:�{qڗ�/����ܯ�ܚZ<����B��"�q5Y[Tf���x�ʒ�7~j��a<��t-򮪢J5J<��K�&%#x\w��T�I�����{�r(�P8�M/\p�YoM0&��?F�<�[��b����4�ә�&�K�|yU%W�Jo�×:���1xeK����_��W��oMO ݓʄIe6�2�ty��é*��g�r�P@�w`wܩ�y��E�ir:�8�t1�-����.���	nQ��-u�S��CH��HS�`����Q@K��/�x��t�RQ�XV�x"{�?|���C��T@�zo5S�5�:} �=���v�9�4^.N�L
p�w�l���P��h�og�2��zq��S�f�%��-�yCސ������"���VIp���l4"K]�װޕ�b�ZS ��]��i<�ߡ8ތˬ�R�$8��V�`��}t�P&�R!?���ᑸ������L�;��[�W�3�|�^F�{��?���ّC�J�2���)�[���b�āBP�i��@����T��7��i*�e���a��t k�Vr+��D��~f�:&�:Ɗ1�˰�Ra�P<��1��M�EPfo;�݅^S�����W��b����e�(�g����0x�;-��1�8�yU��C=���?wuK���p��g����ɟ@8���x:xL� �t~�H�2T�������?�z�bގR�AT҆��a ���%J�!x��?��(�$Z��\�B	�i,}CZ�l�$��G iʍ���f��h�n��4�vG��+�:�5����o^~W�A4P������+Е���$�rn���G�u��mYk9�荬�] S��e5��D�g�>�V�j�!�c�C��x��a��l/2wM�/d<�=� >D��uC��/�zU�4��P-�*]���vJM����pTv.t���H^�`�biz2�p�o�� i�G�R�CE���0��Z�,qYo���Q�͒~�����<��|<_F��Gr��H�g�L��ꅁwM���ְ�ƸR"&��w&P��v^�J	XH|@_��S�}ϣ�C�xmz!7R��b��� M�D5Y��Qʃ��w@'WL�����ʈJ���zEZ�I1�Dp���5�%��%>�n�_�?2��3�!�X�B�tH?� T�P��.����%����|6r(��+p5o'IT5�xR��$x�<���&�n�I�`��2���N4��BL�A�	G��Ȱ�po0B���P^�M�ۨ^�J"v$�l���O6���0i��T��xI�A�ah�q�*�2�wVj|_�rzrJs�%��P5I<;;�yv�
*	��C �i8��;�����4n�!��4�-'���QPlK�����D;�G�ߣI�F�����4�Ζ�U6���2��I�(5�&�I&�<�3��_�~4T<~"&cqC"u'�	D�4 l4�:B�$�N�L�$4ء��ٚj	�����z��ac�I�hD�v#������G�p�zn����H�\����%B�����Z��n 	p�V�k��5��4�~����?��"3�G�L��	�Y�ڄ�X�G<�T}U�$Ȏ�g�{B�7M�8�P�j4V��l?1��\����[U1Ѡ�~?�Y���91�W�b������z��WGRa�i,�}x�<��6�@mY�c ���h@�������D6
���t�B��Jł^NON����ȌX��$x'e��.�\�7�b�l�7�Y���M�͊�m>��k*~�W��^����ۿ�{��V\+[렟�9���6ĞB{ܨ�X5����2�.�;ヘ��:�������bd3�M�Ѕ�?��N�#�rfTDk���Ƚ'q�@8�|��N%��$1F�<�|O�X-w���X�C]�ن��4AK5���!9IץiW�	�5V�sq�y�m��nEa���̀����_��~&K`�E���1��v�A����Յ!��A_i��&���~���P� �o�Psę�)̢�w�#V����8� !�&�P��A�i̥JU.�n��ߵ�F0�v/W�a*�'M~g귘`KT~P������v`�v�uh#~N*tHͱ��Lot�}����Q����2��C��ΚĴ��4:%�}D7JQ�`�`*��Uxe;�GyG�"ȗ����{͗�&���Lh��w ?�އ�jG��z_�<��%���dG��,E~c~��44G��o�o8��K��"ztD�@�
����v�#i��a�gd�|R���Y���A�[���W{�'N˳==a�F�f2��a��i� ͮT6T�X�ݬ��1VC^!�k��EQI�sRA���C�S����I�Ǵ�;1ciV ��]1��Zm�Ŭ�x ���2�E{-�i��2ܥ5�q��^�<�[H6 ޕ��r,~��������K�y|���->99����h      �   I   x����0���0=L(Iv��sxH',8Q8װ.��@��:pqCo+K5�+F|��S��t=f��^��C�H�1      �   3   x�3�4���4�4202�50�54Q00�2��21�334�60�s��qqq ���      �   �   x�5�An�0E��S�\y��eP6��V*���fL� as�����Oo�������6Ri�(��{�{�|�/�H*�h (Euǽ*��vSXI4�L�Pq��0M�6�%�Ly�p	C�c������p��*3>���N32�K���^fӖ��Z��.w��3'�_��%���mS�-m�>��{V<�      �   $   x�3�4�2b3 6b �bCal����� gE      �   �   x�3��I��K��LL��sH�M���K����q��s��tt��sp�u���s���T1JR14P��q��L�+/�N/(5
�r1��+��t/�N�*�H���tJu+����p�w�
�,B�ËB����KW�K�8�2�3Ə+F��� Vm-�     