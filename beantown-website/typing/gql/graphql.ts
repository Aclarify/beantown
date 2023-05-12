/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	Date: any;
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: any;
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: any;
};

export type AboutUs = Document & {
	__typename?: 'AboutUs';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	communityCtaButton?: Maybe<Cta>;
	communityCtaTitle?: Maybe<Scalars['String']>;
	communityctaImage?: Maybe<Image>;
	ctaButton?: Maybe<Cta>;
	ctaDescription?: Maybe<PortableText>;
	ctaImage?: Maybe<Image>;
	ctaTitle?: Maybe<Scalars['String']>;
	heroDescription?: Maybe<Scalars['String']>;
	heroImage?: Maybe<Image>;
	heroTitle?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	memberCards?: Maybe<Array<Maybe<TeamMembers>>>;
	metaDescription?: Maybe<Scalars['String']>;
	missionDescription?: Maybe<PortableText>;
	missionImage?: Maybe<Image>;
	missionTitle?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
	serviceAreaSection?: Maybe<ServiceAreas>;
	teamDescription?: Maybe<Scalars['String']>;
	teamTitle?: Maybe<Scalars['String']>;
	testimonialSection?: Maybe<Testimonials>;
	valuesCards?: Maybe<Array<Maybe<ImageText>>>;
	valuesDescription?: Maybe<PortableText>;
	valuesImage?: Maybe<Image>;
	valuesTitle?: Maybe<Scalars['String']>;
};

export type AboutUsFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	communityCtaButton?: InputMaybe<CtaFilter>;
	communityCtaTitle?: InputMaybe<StringFilter>;
	communityctaImage?: InputMaybe<ImageFilter>;
	ctaButton?: InputMaybe<CtaFilter>;
	ctaDescription?: InputMaybe<PortableTextFilter>;
	ctaImage?: InputMaybe<ImageFilter>;
	ctaTitle?: InputMaybe<StringFilter>;
	heroDescription?: InputMaybe<StringFilter>;
	heroImage?: InputMaybe<ImageFilter>;
	heroTitle?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	missionDescription?: InputMaybe<PortableTextFilter>;
	missionImage?: InputMaybe<ImageFilter>;
	missionTitle?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
	serviceAreaSection?: InputMaybe<ServiceAreasFilter>;
	teamDescription?: InputMaybe<StringFilter>;
	teamTitle?: InputMaybe<StringFilter>;
	testimonialSection?: InputMaybe<TestimonialsFilter>;
	valuesDescription?: InputMaybe<PortableTextFilter>;
	valuesImage?: InputMaybe<ImageFilter>;
	valuesTitle?: InputMaybe<StringFilter>;
};

export type AboutUsSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	communityCtaTitle?: InputMaybe<SortOrder>;
	communityctaImage?: InputMaybe<ImageSorting>;
	ctaDescription?: InputMaybe<PortableTextSorting>;
	ctaImage?: InputMaybe<ImageSorting>;
	ctaTitle?: InputMaybe<SortOrder>;
	heroDescription?: InputMaybe<SortOrder>;
	heroImage?: InputMaybe<ImageSorting>;
	heroTitle?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	missionDescription?: InputMaybe<PortableTextSorting>;
	missionImage?: InputMaybe<ImageSorting>;
	missionTitle?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
	teamDescription?: InputMaybe<SortOrder>;
	teamTitle?: InputMaybe<SortOrder>;
	valuesDescription?: InputMaybe<PortableTextSorting>;
	valuesImage?: InputMaybe<ImageSorting>;
	valuesTitle?: InputMaybe<SortOrder>;
};

export type Block = {
	__typename?: 'Block';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	children?: Maybe<Array<Maybe<Span>>>;
	list?: Maybe<Scalars['String']>;
	style?: Maybe<Scalars['String']>;
};

export type BlockOrBreakType = Block | BreakType;

export type BlockOrImage = Block | Image;

export type Blog = Document & {
	__typename?: 'Blog';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	blogImage?: Maybe<ImageIcon>;
	blogTitle?: Maybe<Scalars['String']>;
	button?: Maybe<Cta>;
	description?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
};

export type BlogFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	blogImage?: InputMaybe<ImageIconFilter>;
	blogTitle?: InputMaybe<StringFilter>;
	button?: InputMaybe<CtaFilter>;
	description?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
};

export type BlogPosts = Document & {
	__typename?: 'BlogPosts';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	blogContentRaw?: Maybe<Scalars['JSON']>;
	blogImage?: Maybe<Image>;
	blogSlug?: Maybe<Slug>;
	blogTags?: Maybe<Array<Maybe<Categories>>>;
	blogTitle?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	publishedAt?: Maybe<Scalars['DateTime']>;
	views?: Maybe<Scalars['Float']>;
};

export type BlogPostsFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	blogImage?: InputMaybe<ImageFilter>;
	blogSlug?: InputMaybe<SlugFilter>;
	blogTitle?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	publishedAt?: InputMaybe<DatetimeFilter>;
	views?: InputMaybe<FloatFilter>;
};

export type BlogPostsSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	blogImage?: InputMaybe<ImageSorting>;
	blogSlug?: InputMaybe<SlugSorting>;
	blogTitle?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	publishedAt?: InputMaybe<SortOrder>;
	views?: InputMaybe<SortOrder>;
};

export type BlogSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	blogImage?: InputMaybe<ImageIconSorting>;
	blogTitle?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
};

export type Blogs = Document & {
	__typename?: 'Blogs';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	ctaDescription?: Maybe<PortableText>;
	ctaImage?: Maybe<Image>;
	ctaTitle?: Maybe<Scalars['String']>;
	finalCtaButton?: Maybe<Cta>;
	heroDescription?: Maybe<PortableText>;
	heroImage?: Maybe<Image>;
	heroTitle?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	maxBlogPostPerPage?: Maybe<Scalars['Float']>;
	metaDescription?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
};

export type BlogsFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	ctaDescription?: InputMaybe<PortableTextFilter>;
	ctaImage?: InputMaybe<ImageFilter>;
	ctaTitle?: InputMaybe<StringFilter>;
	finalCtaButton?: InputMaybe<CtaFilter>;
	heroDescription?: InputMaybe<PortableTextFilter>;
	heroImage?: InputMaybe<ImageFilter>;
	heroTitle?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	maxBlogPostPerPage?: InputMaybe<FloatFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
};

export type BlogsSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	ctaDescription?: InputMaybe<PortableTextSorting>;
	ctaImage?: InputMaybe<ImageSorting>;
	ctaTitle?: InputMaybe<SortOrder>;
	heroDescription?: InputMaybe<PortableTextSorting>;
	heroImage?: InputMaybe<ImageSorting>;
	heroTitle?: InputMaybe<SortOrder>;
	maxBlogPostPerPage?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
};

export type Booknow = Document & {
	__typename?: 'Booknow';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	bookNowDescription?: Maybe<Scalars['String']>;
	bookNowTitle?: Maybe<Scalars['String']>;
	bookNowUrl?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	metaDescription?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
};

export type BooknowFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	bookNowDescription?: InputMaybe<StringFilter>;
	bookNowTitle?: InputMaybe<StringFilter>;
	bookNowUrl?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
};

export type BooknowSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	bookNowDescription?: InputMaybe<SortOrder>;
	bookNowTitle?: InputMaybe<SortOrder>;
	bookNowUrl?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
};

export type BooleanFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['Boolean']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['Boolean']>;
};

export type BreakType = {
	__typename?: 'BreakType';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	style?: Maybe<Scalars['String']>;
};

export type BreakTypeFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	style?: InputMaybe<StringFilter>;
};

export type BreakTypeSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	style?: InputMaybe<SortOrder>;
};

export type Careers = Document & {
	__typename?: 'Careers';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	applicationDescription?: Maybe<Scalars['String']>;
	applicationImage?: Maybe<Image>;
	applicationTitle?: Maybe<Scalars['String']>;
	applyButton?: Maybe<Cta>;
	careerBenefits?: Maybe<Array<Maybe<TitleDescriptionImage>>>;
	careerHeroImage?: Maybe<Image>;
	employmentTypeOptions?: Maybe<Array<Maybe<DropdownOptions>>>;
	globaljobBenefitSectionTitle?: Maybe<Scalars['String']>;
	heroButton?: Maybe<Cta>;
	heroDescription?: Maybe<Scalars['String']>;
	heroTitle?: Maybe<Scalars['String']>;
	jobList?: Maybe<Array<Maybe<JobDetails>>>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	metaDescription?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
};

export type CareersFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	applicationDescription?: InputMaybe<StringFilter>;
	applicationImage?: InputMaybe<ImageFilter>;
	applicationTitle?: InputMaybe<StringFilter>;
	applyButton?: InputMaybe<CtaFilter>;
	careerHeroImage?: InputMaybe<ImageFilter>;
	globaljobBenefitSectionTitle?: InputMaybe<StringFilter>;
	heroButton?: InputMaybe<CtaFilter>;
	heroDescription?: InputMaybe<StringFilter>;
	heroTitle?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
};

export type CareersSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	applicationDescription?: InputMaybe<SortOrder>;
	applicationImage?: InputMaybe<ImageSorting>;
	applicationTitle?: InputMaybe<SortOrder>;
	careerHeroImage?: InputMaybe<ImageSorting>;
	globaljobBenefitSectionTitle?: InputMaybe<SortOrder>;
	heroDescription?: InputMaybe<SortOrder>;
	heroTitle?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
};

export type Categories = Document & {
	__typename?: 'Categories';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	category?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
};

export type CategoriesFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	category?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
};

export type CategoriesSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	category?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
};

export type CheckableItem = {
	__typename?: 'CheckableItem';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	isActivated?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	text?: Maybe<Scalars['String']>;
};

export type CheckableItemFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	isActivated?: InputMaybe<BooleanFilter>;
	name?: InputMaybe<StringFilter>;
	text?: InputMaybe<StringFilter>;
};

export type CheckableItemSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	isActivated?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	text?: InputMaybe<SortOrder>;
};

export type Community = Document & {
	__typename?: 'Community';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	ctaButton?: Maybe<Cta>;
	ctaDescription?: Maybe<PortableText>;
	ctaImage?: Maybe<Image>;
	ctaTitle?: Maybe<Scalars['String']>;
	eventsTitle?: Maybe<Scalars['String']>;
	eventSectionTitle?: Maybe<Scalars['String']>;
	heroDescription?: Maybe<Scalars['String']>;
	heroImage?: Maybe<Image>;
	heroTitle?: Maybe<Scalars['String']>;
	loadMoreButtonText?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	mediaFeedTitle?: Maybe<Scalars['String']>;
	metaDescription?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
	socialMediaFeed?: Maybe<Array<Maybe<MediaFeed>>>;
	viewEventButtonText?: Maybe<Scalars['String']>;
};

export type CommunityFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	ctaButton?: InputMaybe<CtaFilter>;
	ctaDescription?: InputMaybe<PortableTextFilter>;
	ctaImage?: InputMaybe<ImageFilter>;
	ctaTitle?: InputMaybe<StringFilter>;
	eventsTitle?: InputMaybe<StringFilter>;
	eventSectionTitle?: InputMaybe<StringFilter>;
	heroDescription?: InputMaybe<StringFilter>;
	heroImage?: InputMaybe<ImageFilter>;
	heroTitle?: InputMaybe<StringFilter>;
	loadMoreButtonText?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	mediaFeedTitle?: InputMaybe<StringFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
	viewEventButtonText?: InputMaybe<StringFilter>;
};

export type CommunitySorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	ctaDescription?: InputMaybe<PortableTextSorting>;
	ctaImage?: InputMaybe<ImageSorting>;
	ctaTitle?: InputMaybe<SortOrder>;
	eventsTitle?: InputMaybe<SortOrder>;
	eventSectionTitle?: InputMaybe<SortOrder>;
	heroDescription?: InputMaybe<SortOrder>;
	heroImage?: InputMaybe<ImageSorting>;
	heroTitle?: InputMaybe<SortOrder>;
	loadMoreButtonText?: InputMaybe<SortOrder>;
	mediaFeedTitle?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
	viewEventButtonText?: InputMaybe<SortOrder>;
};

export type CrossDatasetReference = {
	__typename?: 'CrossDatasetReference';
	_dataset?: Maybe<Scalars['String']>;
	_key?: Maybe<Scalars['String']>;
	_projectId?: Maybe<Scalars['String']>;
	_ref?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	_weak?: Maybe<Scalars['Boolean']>;
};

export type CrossDatasetReferenceFilter = {
	_dataset?: InputMaybe<StringFilter>;
	_key?: InputMaybe<StringFilter>;
	_projectId?: InputMaybe<StringFilter>;
	_ref?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_weak?: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
	_dataset?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_projectId?: InputMaybe<SortOrder>;
	_ref?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_weak?: InputMaybe<SortOrder>;
};

export type Cta = Document & {
	__typename?: 'Cta';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	dialogButtonHref?: Maybe<Scalars['String']>;
	dialogButtonText?: Maybe<Scalars['String']>;
	dialogDesc?: Maybe<Scalars['String']>;
	dialogTitle?: Maybe<Scalars['String']>;
	href?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	text?: Maybe<Scalars['String']>;
};

export type CtaFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	dialogButtonHref?: InputMaybe<StringFilter>;
	dialogButtonText?: InputMaybe<StringFilter>;
	dialogDesc?: InputMaybe<StringFilter>;
	dialogTitle?: InputMaybe<StringFilter>;
	href?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	text?: InputMaybe<StringFilter>;
};

export type CtaSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	dialogButtonHref?: InputMaybe<SortOrder>;
	dialogButtonText?: InputMaybe<SortOrder>;
	dialogDesc?: InputMaybe<SortOrder>;
	dialogTitle?: InputMaybe<SortOrder>;
	href?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	text?: InputMaybe<SortOrder>;
};

export type DateFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['Date']>;
	/** Checks if the value is greater than the given input. */
	gt?: InputMaybe<Scalars['Date']>;
	/** Checks if the value is greater than or equal to the given input. */
	gte?: InputMaybe<Scalars['Date']>;
	/** Checks if the value is lesser than the given input. */
	lt?: InputMaybe<Scalars['Date']>;
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: InputMaybe<Scalars['Date']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['Date']>;
};

export type DatetimeFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['DateTime']>;
	/** Checks if the value is greater than the given input. */
	gt?: InputMaybe<Scalars['DateTime']>;
	/** Checks if the value is greater than or equal to the given input. */
	gte?: InputMaybe<Scalars['DateTime']>;
	/** Checks if the value is lesser than the given input. */
	lt?: InputMaybe<Scalars['DateTime']>;
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: InputMaybe<Scalars['DateTime']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type Document = {
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
};

export type DropdownOptions = {
	__typename?: 'DropdownOptions';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	label?: Maybe<Scalars['String']>;
	value?: Maybe<Scalars['String']>;
};

export type DropdownOptionsFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	label?: InputMaybe<StringFilter>;
	value?: InputMaybe<StringFilter>;
};

export type DropdownOptionsSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	label?: InputMaybe<SortOrder>;
	value?: InputMaybe<SortOrder>;
};

export type EventsList = Document & {
	__typename?: 'EventsList';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	eventDate?: Maybe<Scalars['DateTime']>;
	eventImage?: Maybe<Image>;
	eventTitle?: Maybe<Scalars['String']>;
	eventUrl?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
};

export type EventsListFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	eventDate?: InputMaybe<DatetimeFilter>;
	eventImage?: InputMaybe<ImageFilter>;
	eventTitle?: InputMaybe<StringFilter>;
	eventUrl?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
};

export type EventsListSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	eventDate?: InputMaybe<SortOrder>;
	eventImage?: InputMaybe<ImageSorting>;
	eventTitle?: InputMaybe<SortOrder>;
	eventUrl?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
};

export type Faq = Document & {
	__typename?: 'Faq';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	answer?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	question?: Maybe<Scalars['String']>;
};

export type FaqFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	answer?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	question?: InputMaybe<StringFilter>;
};

export type FaqSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	answer?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	question?: InputMaybe<SortOrder>;
};

export type File = {
	__typename?: 'File';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
};

export type Financing = Document & {
	__typename?: 'Financing';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	aboutSectionDescription?: Maybe<PortableText>;
	aboutSectionImage?: Maybe<Image>;
	aboutSectionTitle?: Maybe<Scalars['String']>;
	benefitsDescription?: Maybe<PortableText>;
	benefitsImage?: Maybe<Image>;
	benefitsTitle?: Maybe<Scalars['String']>;
	ctaButton?: Maybe<Cta>;
	ctaDescription?: Maybe<PortableText>;
	ctaImage?: Maybe<Image>;
	ctaTitle?: Maybe<Scalars['String']>;
	heroDescription?: Maybe<Scalars['String']>;
	heroImage?: Maybe<Image>;
	heroTitle?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	metaDescription?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
	serviceAreaSection?: Maybe<ServiceAreas>;
	testimonialSection?: Maybe<Testimonials>;
};

export type FinancingFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	aboutSectionDescription?: InputMaybe<PortableTextFilter>;
	aboutSectionImage?: InputMaybe<ImageFilter>;
	aboutSectionTitle?: InputMaybe<StringFilter>;
	benefitsDescription?: InputMaybe<PortableTextFilter>;
	benefitsImage?: InputMaybe<ImageFilter>;
	benefitsTitle?: InputMaybe<StringFilter>;
	ctaButton?: InputMaybe<CtaFilter>;
	ctaDescription?: InputMaybe<PortableTextFilter>;
	ctaImage?: InputMaybe<ImageFilter>;
	ctaTitle?: InputMaybe<StringFilter>;
	heroDescription?: InputMaybe<StringFilter>;
	heroImage?: InputMaybe<ImageFilter>;
	heroTitle?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
	serviceAreaSection?: InputMaybe<ServiceAreasFilter>;
	testimonialSection?: InputMaybe<TestimonialsFilter>;
};

export type FinancingSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	aboutSectionDescription?: InputMaybe<PortableTextSorting>;
	aboutSectionImage?: InputMaybe<ImageSorting>;
	aboutSectionTitle?: InputMaybe<SortOrder>;
	benefitsDescription?: InputMaybe<PortableTextSorting>;
	benefitsImage?: InputMaybe<ImageSorting>;
	benefitsTitle?: InputMaybe<SortOrder>;
	ctaDescription?: InputMaybe<PortableTextSorting>;
	ctaImage?: InputMaybe<ImageSorting>;
	ctaTitle?: InputMaybe<SortOrder>;
	heroDescription?: InputMaybe<SortOrder>;
	heroImage?: InputMaybe<ImageSorting>;
	heroTitle?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['Float']>;
	/** Checks if the value is greater than the given input. */
	gt?: InputMaybe<Scalars['Float']>;
	/** Checks if the value is greater than or equal to the given input. */
	gte?: InputMaybe<Scalars['Float']>;
	/** Checks if the value is lesser than the given input. */
	lt?: InputMaybe<Scalars['Float']>;
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: InputMaybe<Scalars['Float']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['Float']>;
};

export type Footer = Document & {
	__typename?: 'Footer';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	contactUs?: Maybe<Array<Maybe<ImageText>>>;
	contactUsTitle?: Maybe<Scalars['String']>;
	copyright?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	navGroup?: Maybe<Array<Maybe<LinkGroup>>>;
	navLinks?: Maybe<Array<Maybe<Link>>>;
	socialMediaIcons?: Maybe<Array<Maybe<ImageIcon>>>;
};

export type FooterFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	contactUsTitle?: InputMaybe<StringFilter>;
	copyright?: InputMaybe<StringFilter>;
	description?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
};

export type FooterSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	contactUsTitle?: InputMaybe<SortOrder>;
	copyright?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
};

export type Geopoint = {
	__typename?: 'Geopoint';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	alt?: Maybe<Scalars['Float']>;
	lat?: Maybe<Scalars['Float']>;
	lng?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	alt?: InputMaybe<FloatFilter>;
	lat?: InputMaybe<FloatFilter>;
	lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	alt?: InputMaybe<SortOrder>;
	lat?: InputMaybe<SortOrder>;
	lng?: InputMaybe<SortOrder>;
};

export type HeatingAndCooling = Document & {
	__typename?: 'HeatingAndCooling';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	blogButton?: Maybe<Cta>;
	blogCards?: Maybe<Array<Maybe<Blog>>>;
	blogsDescription?: Maybe<Scalars['String']>;
	blogsTitle?: Maybe<Scalars['String']>;
	brandsTitle?: Maybe<Scalars['String']>;
	clientsLogo?: Maybe<Array<Maybe<ImageIcon>>>;
	ctaDescription?: Maybe<PortableText>;
	ctaImage?: Maybe<Image>;
	ctaTitle?: Maybe<Scalars['String']>;
	faqButton?: Maybe<Cta>;
	faqDescription?: Maybe<Scalars['String']>;
	faqList?: Maybe<Array<Maybe<Faq>>>;
	faqTitle?: Maybe<Scalars['String']>;
	finalCtaButton?: Maybe<Cta>;
	heroButton?: Maybe<Cta>;
	heroDescription?: Maybe<PortableText>;
	heroImage?: Maybe<Image>;
	heroTitle?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	massSaveButton?: Maybe<Cta>;
	massSaveDescription?: Maybe<PortableText>;
	massSaveImage?: Maybe<Image>;
	massSaveTitle?: Maybe<Scalars['String']>;
	metaDescription?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
	productsDescription?: Maybe<PortableText>;
	productsGroup?: Maybe<Array<Maybe<TitleDescriptionImage>>>;
	productsTitle?: Maybe<Scalars['String']>;
	servicesDescription?: Maybe<PortableText>;
	servicesGroup?: Maybe<Array<Maybe<TitleDescriptionImage>>>;
	servicesTitle?: Maybe<Scalars['String']>;
};

export type HeatingAndCoolingFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	blogButton?: InputMaybe<CtaFilter>;
	blogsDescription?: InputMaybe<StringFilter>;
	blogsTitle?: InputMaybe<StringFilter>;
	brandsTitle?: InputMaybe<StringFilter>;
	ctaDescription?: InputMaybe<PortableTextFilter>;
	ctaImage?: InputMaybe<ImageFilter>;
	ctaTitle?: InputMaybe<StringFilter>;
	faqButton?: InputMaybe<CtaFilter>;
	faqDescription?: InputMaybe<StringFilter>;
	faqTitle?: InputMaybe<StringFilter>;
	finalCtaButton?: InputMaybe<CtaFilter>;
	heroButton?: InputMaybe<CtaFilter>;
	heroDescription?: InputMaybe<PortableTextFilter>;
	heroImage?: InputMaybe<ImageFilter>;
	heroTitle?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	massSaveButton?: InputMaybe<CtaFilter>;
	massSaveDescription?: InputMaybe<PortableTextFilter>;
	massSaveImage?: InputMaybe<ImageFilter>;
	massSaveTitle?: InputMaybe<StringFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
	productsDescription?: InputMaybe<PortableTextFilter>;
	productsTitle?: InputMaybe<StringFilter>;
	servicesDescription?: InputMaybe<PortableTextFilter>;
	servicesTitle?: InputMaybe<StringFilter>;
};

export type HeatingAndCoolingSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	blogsDescription?: InputMaybe<SortOrder>;
	blogsTitle?: InputMaybe<SortOrder>;
	brandsTitle?: InputMaybe<SortOrder>;
	ctaDescription?: InputMaybe<PortableTextSorting>;
	ctaImage?: InputMaybe<ImageSorting>;
	ctaTitle?: InputMaybe<SortOrder>;
	faqDescription?: InputMaybe<SortOrder>;
	faqTitle?: InputMaybe<SortOrder>;
	heroDescription?: InputMaybe<PortableTextSorting>;
	heroImage?: InputMaybe<ImageSorting>;
	heroTitle?: InputMaybe<SortOrder>;
	massSaveDescription?: InputMaybe<PortableTextSorting>;
	massSaveImage?: InputMaybe<ImageSorting>;
	massSaveTitle?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
	productsDescription?: InputMaybe<PortableTextSorting>;
	productsTitle?: InputMaybe<SortOrder>;
	servicesDescription?: InputMaybe<PortableTextSorting>;
	servicesTitle?: InputMaybe<SortOrder>;
};

export type Home = Document & {
	__typename?: 'Home';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	blogButton?: Maybe<Cta>;
	blogCards?: Maybe<Array<Maybe<Blog>>>;
	blogsDescription?: Maybe<Scalars['String']>;
	blogsTitle?: Maybe<Scalars['String']>;
	brandsTitle?: Maybe<Scalars['String']>;
	clientsLogo?: Maybe<Array<Maybe<ImageIcon>>>;
	ctaDescription?: Maybe<PortableText>;
	ctaImage?: Maybe<Image>;
	ctaTitle?: Maybe<Scalars['String']>;
	faqButton?: Maybe<Cta>;
	faqDescription?: Maybe<Scalars['String']>;
	faqList?: Maybe<Array<Maybe<Faq>>>;
	faqTitle?: Maybe<Scalars['String']>;
	finalCtaButton?: Maybe<Cta>;
	heroButton?: Maybe<Cta>;
	heroDescription?: Maybe<PortableText>;
	heroImage?: Maybe<Image>;
	heroTitle?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	metaDescription?: Maybe<Scalars['String']>;
	mitsubishiDiamondDescription?: Maybe<PortableText>;
	mitsubishiDiamondImage?: Maybe<Image>;
	mitsubishiDiamondTitle?: Maybe<Scalars['String']>;
	mitsubishiLogo?: Maybe<Image>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
	serviceAreaSection?: Maybe<ServiceAreas>;
	servicesDescription?: Maybe<PortableText>;
	servicesGroup?: Maybe<Array<Maybe<ServicesCards>>>;
	servicesTitle?: Maybe<Scalars['String']>;
	testimonialSection?: Maybe<Testimonials>;
	whyUsButton?: Maybe<Cta>;
	whyUsCards?: Maybe<Array<Maybe<TitleDescriptionImage>>>;
	whyUsDescription?: Maybe<PortableText>;
	whyUsImage?: Maybe<Image>;
	whyUsTitle?: Maybe<Scalars['String']>;
};

export type HomeFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	blogButton?: InputMaybe<CtaFilter>;
	blogsDescription?: InputMaybe<StringFilter>;
	blogsTitle?: InputMaybe<StringFilter>;
	brandsTitle?: InputMaybe<StringFilter>;
	ctaDescription?: InputMaybe<PortableTextFilter>;
	ctaImage?: InputMaybe<ImageFilter>;
	ctaTitle?: InputMaybe<StringFilter>;
	faqButton?: InputMaybe<CtaFilter>;
	faqDescription?: InputMaybe<StringFilter>;
	faqTitle?: InputMaybe<StringFilter>;
	finalCtaButton?: InputMaybe<CtaFilter>;
	heroButton?: InputMaybe<CtaFilter>;
	heroDescription?: InputMaybe<PortableTextFilter>;
	heroImage?: InputMaybe<ImageFilter>;
	heroTitle?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	mitsubishiDiamondDescription?: InputMaybe<PortableTextFilter>;
	mitsubishiDiamondImage?: InputMaybe<ImageFilter>;
	mitsubishiDiamondTitle?: InputMaybe<StringFilter>;
	mitsubishiLogo?: InputMaybe<ImageFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
	serviceAreaSection?: InputMaybe<ServiceAreasFilter>;
	servicesDescription?: InputMaybe<PortableTextFilter>;
	servicesTitle?: InputMaybe<StringFilter>;
	testimonialSection?: InputMaybe<TestimonialsFilter>;
	whyUsButton?: InputMaybe<CtaFilter>;
	whyUsDescription?: InputMaybe<PortableTextFilter>;
	whyUsImage?: InputMaybe<ImageFilter>;
	whyUsTitle?: InputMaybe<StringFilter>;
};

export type HomeSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	blogsDescription?: InputMaybe<SortOrder>;
	blogsTitle?: InputMaybe<SortOrder>;
	brandsTitle?: InputMaybe<SortOrder>;
	ctaDescription?: InputMaybe<PortableTextSorting>;
	ctaImage?: InputMaybe<ImageSorting>;
	ctaTitle?: InputMaybe<SortOrder>;
	faqDescription?: InputMaybe<SortOrder>;
	faqTitle?: InputMaybe<SortOrder>;
	heroDescription?: InputMaybe<PortableTextSorting>;
	heroImage?: InputMaybe<ImageSorting>;
	heroTitle?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	mitsubishiDiamondDescription?: InputMaybe<PortableTextSorting>;
	mitsubishiDiamondImage?: InputMaybe<ImageSorting>;
	mitsubishiDiamondTitle?: InputMaybe<SortOrder>;
	mitsubishiLogo?: InputMaybe<ImageSorting>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
	servicesDescription?: InputMaybe<PortableTextSorting>;
	servicesTitle?: InputMaybe<SortOrder>;
	whyUsDescription?: InputMaybe<PortableTextSorting>;
	whyUsImage?: InputMaybe<ImageSorting>;
	whyUsTitle?: InputMaybe<SortOrder>;
};

export type IdFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['ID']>;
	in?: InputMaybe<Array<Scalars['ID']>>;
	/** Checks if the value matches the given word/words. */
	matches?: InputMaybe<Scalars['ID']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['ID']>;
	nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
	__typename?: 'Image';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	asset?: Maybe<SanityImageAsset>;
	crop?: Maybe<SanityImageCrop>;
	hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	asset?: InputMaybe<SanityImageAssetFilter>;
	crop?: InputMaybe<SanityImageCropFilter>;
	hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageIcon = Document & {
	__typename?: 'ImageIcon';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	altText?: Maybe<Scalars['String']>;
	href?: Maybe<Scalars['String']>;
	image?: Maybe<Image>;
	name?: Maybe<Scalars['String']>;
	newWindow?: Maybe<Scalars['Boolean']>;
	text?: Maybe<Scalars['String']>;
};

export type ImageIconFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	altText?: InputMaybe<StringFilter>;
	href?: InputMaybe<StringFilter>;
	image?: InputMaybe<ImageFilter>;
	name?: InputMaybe<StringFilter>;
	newWindow?: InputMaybe<BooleanFilter>;
	text?: InputMaybe<StringFilter>;
};

export type ImageIconSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	altText?: InputMaybe<SortOrder>;
	href?: InputMaybe<SortOrder>;
	image?: InputMaybe<ImageSorting>;
	name?: InputMaybe<SortOrder>;
	newWindow?: InputMaybe<SortOrder>;
	text?: InputMaybe<SortOrder>;
};

export type ImageSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	crop?: InputMaybe<SanityImageCropSorting>;
	hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type ImageText = {
	__typename?: 'ImageText';
	Name?: Maybe<Scalars['String']>;
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	iconImage?: Maybe<Image>;
	text?: Maybe<Scalars['String']>;
};

export type ImageTextFilter = {
	Name?: InputMaybe<StringFilter>;
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	iconImage?: InputMaybe<ImageFilter>;
	text?: InputMaybe<StringFilter>;
};

export type ImageTextSorting = {
	Name?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	iconImage?: InputMaybe<ImageSorting>;
	text?: InputMaybe<SortOrder>;
};

export type Images = Document & {
	__typename?: 'Images';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	image?: Maybe<Image>;
	name?: Maybe<Scalars['String']>;
};

export type ImagesFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	image?: InputMaybe<ImageFilter>;
	name?: InputMaybe<StringFilter>;
};

export type ImagesSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	image?: InputMaybe<ImageSorting>;
	name?: InputMaybe<SortOrder>;
};

export type IntFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['Int']>;
	/** Checks if the value is greater than the given input. */
	gt?: InputMaybe<Scalars['Int']>;
	/** Checks if the value is greater than or equal to the given input. */
	gte?: InputMaybe<Scalars['Int']>;
	/** Checks if the value is lesser than the given input. */
	lt?: InputMaybe<Scalars['Int']>;
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: InputMaybe<Scalars['Int']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['Int']>;
};

export type JobDetails = {
	__typename?: 'JobDetails';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	jobBenefitCards?: Maybe<Array<Maybe<TitleDescriptionImage>>>;
	jobBenefitCardsSectionTitle?: Maybe<Scalars['String']>;
	jobDescription?: Maybe<PortableText>;
	jobDescriptionTitle?: Maybe<Scalars['String']>;
	jobImage?: Maybe<Image>;
	jobResponsibilities?: Maybe<Array<Maybe<TitleDescription>>>;
	jobResponsibilityMainTitle?: Maybe<Scalars['String']>;
	learnMoreButton?: Maybe<Cta>;
	positionName?: Maybe<Scalars['String']>;
};

export type JobDetailsFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	jobBenefitCardsSectionTitle?: InputMaybe<StringFilter>;
	jobDescription?: InputMaybe<PortableTextFilter>;
	jobDescriptionTitle?: InputMaybe<StringFilter>;
	jobImage?: InputMaybe<ImageFilter>;
	jobResponsibilityMainTitle?: InputMaybe<StringFilter>;
	learnMoreButton?: InputMaybe<CtaFilter>;
	positionName?: InputMaybe<StringFilter>;
};

export type JobDetailsSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	jobBenefitCardsSectionTitle?: InputMaybe<SortOrder>;
	jobDescription?: InputMaybe<PortableTextSorting>;
	jobDescriptionTitle?: InputMaybe<SortOrder>;
	jobImage?: InputMaybe<ImageSorting>;
	jobResponsibilityMainTitle?: InputMaybe<SortOrder>;
	positionName?: InputMaybe<SortOrder>;
};

export type Link = Document & {
	__typename?: 'Link';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	heroIconName?: Maybe<Scalars['String']>;
	href?: Maybe<Scalars['String']>;
	linkName?: Maybe<Scalars['String']>;
	linkText?: Maybe<Scalars['String']>;
	newWindow?: Maybe<Scalars['Boolean']>;
};

export type LinkFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	heroIconName?: InputMaybe<StringFilter>;
	href?: InputMaybe<StringFilter>;
	linkName?: InputMaybe<StringFilter>;
	linkText?: InputMaybe<StringFilter>;
	newWindow?: InputMaybe<BooleanFilter>;
};

export type LinkGroup = {
	__typename?: 'LinkGroup';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	groupTitle?: Maybe<Scalars['String']>;
	linkGroupName?: Maybe<Scalars['String']>;
	links?: Maybe<Array<Maybe<Link>>>;
};

export type LinkGroupFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	groupTitle?: InputMaybe<StringFilter>;
	linkGroupName?: InputMaybe<StringFilter>;
};

export type LinkGroupSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	groupTitle?: InputMaybe<SortOrder>;
	linkGroupName?: InputMaybe<SortOrder>;
};

export type LinkSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	heroIconName?: InputMaybe<SortOrder>;
	href?: InputMaybe<SortOrder>;
	linkName?: InputMaybe<SortOrder>;
	linkText?: InputMaybe<SortOrder>;
	newWindow?: InputMaybe<SortOrder>;
};

export type LinksHub = Document & {
	__typename?: 'LinksHub';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	links?: Maybe<Array<Maybe<Link>>>;
	linksHubDescription?: Maybe<Scalars['String']>;
	linksHubTitle?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	metaDescription?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
	socialMediaIcons?: Maybe<Array<Maybe<ImageIcon>>>;
};

export type LinksHubFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	linksHubDescription?: InputMaybe<StringFilter>;
	linksHubTitle?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
};

export type LinksHubSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	linksHubDescription?: InputMaybe<SortOrder>;
	linksHubTitle?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
};

export type MassSave = Document & {
	__typename?: 'MassSave';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	aboutMassSaveDescription?: Maybe<PortableText>;
	aboutMassSaveImage?: Maybe<Image>;
	aboutMassSaveTitle?: Maybe<Scalars['String']>;
	contactButton?: Maybe<Cta>;
	ctaButton?: Maybe<Cta>;
	ctaDescription?: Maybe<PortableText>;
	ctaImage?: Maybe<Image>;
	ctaTitle?: Maybe<Scalars['String']>;
	faqButton?: Maybe<Cta>;
	faqDescription?: Maybe<Scalars['String']>;
	faqList?: Maybe<Array<Maybe<Faq>>>;
	faqTitle?: Maybe<Scalars['String']>;
	featuresDescription?: Maybe<PortableText>;
	featuresImage?: Maybe<Image>;
	featuresTitle?: Maybe<Scalars['String']>;
	heroDescription?: Maybe<Scalars['String']>;
	heroImage?: Maybe<Image>;
	heroTitle?: Maybe<Scalars['String']>;
	howItWorksDescription?: Maybe<PortableText>;
	howItWorksTitle?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	metaDescription?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
	stagesCards?: Maybe<Array<Maybe<TitleDescriptionImage>>>;
};

export type MassSaveFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	aboutMassSaveDescription?: InputMaybe<PortableTextFilter>;
	aboutMassSaveImage?: InputMaybe<ImageFilter>;
	aboutMassSaveTitle?: InputMaybe<StringFilter>;
	contactButton?: InputMaybe<CtaFilter>;
	ctaButton?: InputMaybe<CtaFilter>;
	ctaDescription?: InputMaybe<PortableTextFilter>;
	ctaImage?: InputMaybe<ImageFilter>;
	ctaTitle?: InputMaybe<StringFilter>;
	faqButton?: InputMaybe<CtaFilter>;
	faqDescription?: InputMaybe<StringFilter>;
	faqTitle?: InputMaybe<StringFilter>;
	featuresDescription?: InputMaybe<PortableTextFilter>;
	featuresImage?: InputMaybe<ImageFilter>;
	featuresTitle?: InputMaybe<StringFilter>;
	heroDescription?: InputMaybe<StringFilter>;
	heroImage?: InputMaybe<ImageFilter>;
	heroTitle?: InputMaybe<StringFilter>;
	howItWorksDescription?: InputMaybe<PortableTextFilter>;
	howItWorksTitle?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
};

export type MassSaveSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	aboutMassSaveDescription?: InputMaybe<PortableTextSorting>;
	aboutMassSaveImage?: InputMaybe<ImageSorting>;
	aboutMassSaveTitle?: InputMaybe<SortOrder>;
	ctaDescription?: InputMaybe<PortableTextSorting>;
	ctaImage?: InputMaybe<ImageSorting>;
	ctaTitle?: InputMaybe<SortOrder>;
	faqDescription?: InputMaybe<SortOrder>;
	faqTitle?: InputMaybe<SortOrder>;
	featuresDescription?: InputMaybe<PortableTextSorting>;
	featuresImage?: InputMaybe<ImageSorting>;
	featuresTitle?: InputMaybe<SortOrder>;
	heroDescription?: InputMaybe<SortOrder>;
	heroImage?: InputMaybe<ImageSorting>;
	heroTitle?: InputMaybe<SortOrder>;
	howItWorksDescription?: InputMaybe<PortableTextSorting>;
	howItWorksTitle?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
};

export type MediaFeed = Document & {
	__typename?: 'MediaFeed';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	fbURL?: Maybe<Scalars['String']>;
	feedImage?: Maybe<Image>;
	instaURL?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	twitterURL?: Maybe<Scalars['String']>;
};

export type MediaFeedFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	fbURL?: InputMaybe<StringFilter>;
	feedImage?: InputMaybe<ImageFilter>;
	instaURL?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	twitterURL?: InputMaybe<StringFilter>;
};

export type MediaFeedSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	fbURL?: InputMaybe<SortOrder>;
	feedImage?: InputMaybe<ImageSorting>;
	instaURL?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	twitterURL?: InputMaybe<SortOrder>;
};

export type Memberships = Document & {
	__typename?: 'Memberships';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	ctaDescription?: Maybe<PortableText>;
	ctaImage?: Maybe<Image>;
	ctaTitle?: Maybe<Scalars['String']>;
	finalCtaButton?: Maybe<Cta>;
	heroDescription?: Maybe<Scalars['String']>;
	heroTitle?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	metaDescription?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
	serviceMembershipsSection?: Maybe<Array<Maybe<ServiceMemberships>>>;
};

export type MembershipsFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	ctaDescription?: InputMaybe<PortableTextFilter>;
	ctaImage?: InputMaybe<ImageFilter>;
	ctaTitle?: InputMaybe<StringFilter>;
	finalCtaButton?: InputMaybe<CtaFilter>;
	heroDescription?: InputMaybe<StringFilter>;
	heroTitle?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
};

export type MembershipsSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	ctaDescription?: InputMaybe<PortableTextSorting>;
	ctaImage?: InputMaybe<ImageSorting>;
	ctaTitle?: InputMaybe<SortOrder>;
	heroDescription?: InputMaybe<SortOrder>;
	heroTitle?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
};

export type Nav = Document & {
	__typename?: 'Nav';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	headerButton?: Maybe<Cta>;
	name?: Maybe<Scalars['String']>;
	navGroup?: Maybe<Array<Maybe<LinkGroup>>>;
	navLinks?: Maybe<Array<Maybe<Link>>>;
};

export type NavFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	headerButton?: InputMaybe<CtaFilter>;
	name?: InputMaybe<StringFilter>;
};

export type NavSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
};

export type OtherServices = Document & {
	__typename?: 'OtherServices';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	aboutTheServiceDescription?: Maybe<PortableText>;
	aboutTheServiceImage?: Maybe<Image>;
	aboutTheServiceTitle?: Maybe<Scalars['String']>;
	blogButton?: Maybe<Cta>;
	blogCards?: Maybe<Array<Maybe<Blog>>>;
	blogsDescription?: Maybe<Scalars['String']>;
	blogsTitle?: Maybe<Scalars['String']>;
	contactUsButton?: Maybe<Cta>;
	ctaButton?: Maybe<Cta>;
	ctaImage?: Maybe<Image>;
	ctaTitle?: Maybe<Scalars['String']>;
	faqButton?: Maybe<Cta>;
	faqDescription?: Maybe<Scalars['String']>;
	faqList?: Maybe<Array<Maybe<Faq>>>;
	faqTitle?: Maybe<Scalars['String']>;
	heroButton?: Maybe<Cta>;
	heroDescription?: Maybe<PortableText>;
	heroImage?: Maybe<Image>;
	heroTitle?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	metaDescription?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
	servicesList?: Maybe<Array<Maybe<Scalars['String']>>>;
	servicesListTitle?: Maybe<Scalars['String']>;
};

export type OtherServicesFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	aboutTheServiceDescription?: InputMaybe<PortableTextFilter>;
	aboutTheServiceImage?: InputMaybe<ImageFilter>;
	aboutTheServiceTitle?: InputMaybe<StringFilter>;
	blogButton?: InputMaybe<CtaFilter>;
	blogsDescription?: InputMaybe<StringFilter>;
	blogsTitle?: InputMaybe<StringFilter>;
	contactUsButton?: InputMaybe<CtaFilter>;
	ctaButton?: InputMaybe<CtaFilter>;
	ctaImage?: InputMaybe<ImageFilter>;
	ctaTitle?: InputMaybe<StringFilter>;
	faqButton?: InputMaybe<CtaFilter>;
	faqDescription?: InputMaybe<StringFilter>;
	faqTitle?: InputMaybe<StringFilter>;
	heroButton?: InputMaybe<CtaFilter>;
	heroDescription?: InputMaybe<PortableTextFilter>;
	heroImage?: InputMaybe<ImageFilter>;
	heroTitle?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
	servicesListTitle?: InputMaybe<StringFilter>;
};

export type OtherServicesSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	aboutTheServiceDescription?: InputMaybe<PortableTextSorting>;
	aboutTheServiceImage?: InputMaybe<ImageSorting>;
	aboutTheServiceTitle?: InputMaybe<SortOrder>;
	blogsDescription?: InputMaybe<SortOrder>;
	blogsTitle?: InputMaybe<SortOrder>;
	ctaImage?: InputMaybe<ImageSorting>;
	ctaTitle?: InputMaybe<SortOrder>;
	faqDescription?: InputMaybe<SortOrder>;
	faqTitle?: InputMaybe<SortOrder>;
	heroDescription?: InputMaybe<PortableTextSorting>;
	heroImage?: InputMaybe<ImageSorting>;
	heroTitle?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
	servicesListTitle?: InputMaybe<SortOrder>;
};

export type PortableText = {
	__typename?: 'PortableText';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	contentRaw?: Maybe<Scalars['JSON']>;
};

export type PortableTextFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
};

export type PortableTextSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
};

export type PrivacyPolicy = Document & {
	__typename?: 'PrivacyPolicy';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	heroDescription?: Maybe<Scalars['String']>;
	heroImage?: Maybe<Image>;
	heroTitle?: Maybe<Scalars['String']>;
	logoDark?: Maybe<ImageIcon>;
	logoLight?: Maybe<ImageIcon>;
	metaDescription?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	pageTitle?: Maybe<Scalars['String']>;
	privacyPolicyContent?: Maybe<PortableText>;
	sectionTitle?: Maybe<Scalars['String']>;
};

export type PrivacyPolicyFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	heroDescription?: InputMaybe<StringFilter>;
	heroImage?: InputMaybe<ImageFilter>;
	heroTitle?: InputMaybe<StringFilter>;
	logoDark?: InputMaybe<ImageIconFilter>;
	logoLight?: InputMaybe<ImageIconFilter>;
	metaDescription?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	pageTitle?: InputMaybe<StringFilter>;
	privacyPolicyContent?: InputMaybe<PortableTextFilter>;
	sectionTitle?: InputMaybe<StringFilter>;
};

export type PrivacyPolicySorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	heroDescription?: InputMaybe<SortOrder>;
	heroImage?: InputMaybe<ImageSorting>;
	heroTitle?: InputMaybe<SortOrder>;
	metaDescription?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	pageTitle?: InputMaybe<SortOrder>;
	privacyPolicyContent?: InputMaybe<PortableTextSorting>;
	sectionTitle?: InputMaybe<SortOrder>;
};

export type RootQuery = {
	__typename?: 'RootQuery';
	AboutUs?: Maybe<AboutUs>;
	Blog?: Maybe<Blog>;
	BlogPosts?: Maybe<BlogPosts>;
	Blogs?: Maybe<Blogs>;
	Booknow?: Maybe<Booknow>;
	Careers?: Maybe<Careers>;
	Categories?: Maybe<Categories>;
	Community?: Maybe<Community>;
	Cta?: Maybe<Cta>;
	Document?: Maybe<Document>;
	EventsList?: Maybe<EventsList>;
	Faq?: Maybe<Faq>;
	Financing?: Maybe<Financing>;
	Footer?: Maybe<Footer>;
	HeatingAndCooling?: Maybe<HeatingAndCooling>;
	Home?: Maybe<Home>;
	ImageIcon?: Maybe<ImageIcon>;
	Images?: Maybe<Images>;
	Link?: Maybe<Link>;
	LinksHub?: Maybe<LinksHub>;
	MassSave?: Maybe<MassSave>;
	MediaFeed?: Maybe<MediaFeed>;
	Memberships?: Maybe<Memberships>;
	Nav?: Maybe<Nav>;
	OtherServices?: Maybe<OtherServices>;
	PrivacyPolicy?: Maybe<PrivacyPolicy>;
	SanityFileAsset?: Maybe<SanityFileAsset>;
	SanityImageAsset?: Maybe<SanityImageAsset>;
	ServiceAreas?: Maybe<ServiceAreas>;
	ServiceMemberships?: Maybe<ServiceMemberships>;
	SubmittedApplications?: Maybe<SubmittedApplications>;
	Testimonials?: Maybe<Testimonials>;
	allAboutUs: Array<AboutUs>;
	allBlog: Array<Blog>;
	allBlogPosts: Array<BlogPosts>;
	allBlogs: Array<Blogs>;
	allBooknow: Array<Booknow>;
	allCareers: Array<Careers>;
	allCategories: Array<Categories>;
	allCommunity: Array<Community>;
	allCta: Array<Cta>;
	allDocument: Array<Document>;
	allEventsList: Array<EventsList>;
	allFaq: Array<Faq>;
	allFinancing: Array<Financing>;
	allFooter: Array<Footer>;
	allHeatingAndCooling: Array<HeatingAndCooling>;
	allHome: Array<Home>;
	allImageIcon: Array<ImageIcon>;
	allImages: Array<Images>;
	allLink: Array<Link>;
	allLinksHub: Array<LinksHub>;
	allMassSave: Array<MassSave>;
	allMediaFeed: Array<MediaFeed>;
	allMemberships: Array<Memberships>;
	allNav: Array<Nav>;
	allOtherServices: Array<OtherServices>;
	allPrivacyPolicy: Array<PrivacyPolicy>;
	allSanityFileAsset: Array<SanityFileAsset>;
	allSanityImageAsset: Array<SanityImageAsset>;
	allServiceAreas: Array<ServiceAreas>;
	allServiceMemberships: Array<ServiceMemberships>;
	allSubmittedApplications: Array<SubmittedApplications>;
	allTestimonials: Array<Testimonials>;
};

export type RootQueryAboutUsArgs = {
	id: Scalars['ID'];
};

export type RootQueryBlogArgs = {
	id: Scalars['ID'];
};

export type RootQueryBlogPostsArgs = {
	id: Scalars['ID'];
};

export type RootQueryBlogsArgs = {
	id: Scalars['ID'];
};

export type RootQueryBooknowArgs = {
	id: Scalars['ID'];
};

export type RootQueryCareersArgs = {
	id: Scalars['ID'];
};

export type RootQueryCategoriesArgs = {
	id: Scalars['ID'];
};

export type RootQueryCommunityArgs = {
	id: Scalars['ID'];
};

export type RootQueryCtaArgs = {
	id: Scalars['ID'];
};

export type RootQueryDocumentArgs = {
	id: Scalars['ID'];
};

export type RootQueryEventsListArgs = {
	id: Scalars['ID'];
};

export type RootQueryFaqArgs = {
	id: Scalars['ID'];
};

export type RootQueryFinancingArgs = {
	id: Scalars['ID'];
};

export type RootQueryFooterArgs = {
	id: Scalars['ID'];
};

export type RootQueryHeatingAndCoolingArgs = {
	id: Scalars['ID'];
};

export type RootQueryHomeArgs = {
	id: Scalars['ID'];
};

export type RootQueryImageIconArgs = {
	id: Scalars['ID'];
};

export type RootQueryImagesArgs = {
	id: Scalars['ID'];
};

export type RootQueryLinkArgs = {
	id: Scalars['ID'];
};

export type RootQueryLinksHubArgs = {
	id: Scalars['ID'];
};

export type RootQueryMassSaveArgs = {
	id: Scalars['ID'];
};

export type RootQueryMediaFeedArgs = {
	id: Scalars['ID'];
};

export type RootQueryMembershipsArgs = {
	id: Scalars['ID'];
};

export type RootQueryNavArgs = {
	id: Scalars['ID'];
};

export type RootQueryOtherServicesArgs = {
	id: Scalars['ID'];
};

export type RootQueryPrivacyPolicyArgs = {
	id: Scalars['ID'];
};

export type RootQuerySanityFileAssetArgs = {
	id: Scalars['ID'];
};

export type RootQuerySanityImageAssetArgs = {
	id: Scalars['ID'];
};

export type RootQueryServiceAreasArgs = {
	id: Scalars['ID'];
};

export type RootQueryServiceMembershipsArgs = {
	id: Scalars['ID'];
};

export type RootQuerySubmittedApplicationsArgs = {
	id: Scalars['ID'];
};

export type RootQueryTestimonialsArgs = {
	id: Scalars['ID'];
};

export type RootQueryAllAboutUsArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<AboutUsSorting>>;
	where?: InputMaybe<AboutUsFilter>;
};

export type RootQueryAllBlogArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<BlogSorting>>;
	where?: InputMaybe<BlogFilter>;
};

export type RootQueryAllBlogPostsArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<BlogPostsSorting>>;
	where?: InputMaybe<BlogPostsFilter>;
};

export type RootQueryAllBlogsArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<BlogsSorting>>;
	where?: InputMaybe<BlogsFilter>;
};

export type RootQueryAllBooknowArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<BooknowSorting>>;
	where?: InputMaybe<BooknowFilter>;
};

export type RootQueryAllCareersArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<CareersSorting>>;
	where?: InputMaybe<CareersFilter>;
};

export type RootQueryAllCategoriesArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<CategoriesSorting>>;
	where?: InputMaybe<CategoriesFilter>;
};

export type RootQueryAllCommunityArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<CommunitySorting>>;
	where?: InputMaybe<CommunityFilter>;
};

export type RootQueryAllCtaArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<CtaSorting>>;
	where?: InputMaybe<CtaFilter>;
};

export type RootQueryAllDocumentArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<DocumentSorting>>;
	where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllEventsListArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<EventsListSorting>>;
	where?: InputMaybe<EventsListFilter>;
};

export type RootQueryAllFaqArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<FaqSorting>>;
	where?: InputMaybe<FaqFilter>;
};

export type RootQueryAllFinancingArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<FinancingSorting>>;
	where?: InputMaybe<FinancingFilter>;
};

export type RootQueryAllFooterArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<FooterSorting>>;
	where?: InputMaybe<FooterFilter>;
};

export type RootQueryAllHeatingAndCoolingArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<HeatingAndCoolingSorting>>;
	where?: InputMaybe<HeatingAndCoolingFilter>;
};

export type RootQueryAllHomeArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<HomeSorting>>;
	where?: InputMaybe<HomeFilter>;
};

export type RootQueryAllImageIconArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<ImageIconSorting>>;
	where?: InputMaybe<ImageIconFilter>;
};

export type RootQueryAllImagesArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<ImagesSorting>>;
	where?: InputMaybe<ImagesFilter>;
};

export type RootQueryAllLinkArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<LinkSorting>>;
	where?: InputMaybe<LinkFilter>;
};

export type RootQueryAllLinksHubArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<LinksHubSorting>>;
	where?: InputMaybe<LinksHubFilter>;
};

export type RootQueryAllMassSaveArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<MassSaveSorting>>;
	where?: InputMaybe<MassSaveFilter>;
};

export type RootQueryAllMediaFeedArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<MediaFeedSorting>>;
	where?: InputMaybe<MediaFeedFilter>;
};

export type RootQueryAllMembershipsArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<MembershipsSorting>>;
	where?: InputMaybe<MembershipsFilter>;
};

export type RootQueryAllNavArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<NavSorting>>;
	where?: InputMaybe<NavFilter>;
};

export type RootQueryAllOtherServicesArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<OtherServicesSorting>>;
	where?: InputMaybe<OtherServicesFilter>;
};

export type RootQueryAllPrivacyPolicyArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<PrivacyPolicySorting>>;
	where?: InputMaybe<PrivacyPolicyFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<SanityFileAssetSorting>>;
	where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<SanityImageAssetSorting>>;
	where?: InputMaybe<SanityImageAssetFilter>;
};

export type RootQueryAllServiceAreasArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<ServiceAreasSorting>>;
	where?: InputMaybe<ServiceAreasFilter>;
};

export type RootQueryAllServiceMembershipsArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<ServiceMembershipsSorting>>;
	where?: InputMaybe<ServiceMembershipsFilter>;
};

export type RootQueryAllSubmittedApplicationsArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<SubmittedApplicationsSorting>>;
	where?: InputMaybe<SubmittedApplicationsFilter>;
};

export type RootQueryAllTestimonialsArgs = {
	limit?: InputMaybe<Scalars['Int']>;
	offset?: InputMaybe<Scalars['Int']>;
	sort?: InputMaybe<Array<TestimonialsSorting>>;
	where?: InputMaybe<TestimonialsFilter>;
};

export type SanityAssetSourceData = {
	__typename?: 'SanityAssetSourceData';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	/** The unique ID for the asset within the originating source so you can programatically find back to it */
	id?: Maybe<Scalars['String']>;
	/** A canonical name for the source this asset is originating from */
	name?: Maybe<Scalars['String']>;
	/** A URL to find more information about this asset in the originating source */
	url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	id?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	id?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
	__typename?: 'SanityFileAsset';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	altText?: Maybe<Scalars['String']>;
	assetId?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	extension?: Maybe<Scalars['String']>;
	label?: Maybe<Scalars['String']>;
	mimeType?: Maybe<Scalars['String']>;
	originalFilename?: Maybe<Scalars['String']>;
	path?: Maybe<Scalars['String']>;
	sha1hash?: Maybe<Scalars['String']>;
	size?: Maybe<Scalars['Float']>;
	source?: Maybe<SanityAssetSourceData>;
	title?: Maybe<Scalars['String']>;
	url?: Maybe<Scalars['String']>;
};

export type SanityFileAssetFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	altText?: InputMaybe<StringFilter>;
	assetId?: InputMaybe<StringFilter>;
	description?: InputMaybe<StringFilter>;
	extension?: InputMaybe<StringFilter>;
	label?: InputMaybe<StringFilter>;
	mimeType?: InputMaybe<StringFilter>;
	originalFilename?: InputMaybe<StringFilter>;
	path?: InputMaybe<StringFilter>;
	sha1hash?: InputMaybe<StringFilter>;
	size?: InputMaybe<FloatFilter>;
	source?: InputMaybe<SanityAssetSourceDataFilter>;
	title?: InputMaybe<StringFilter>;
	url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	altText?: InputMaybe<SortOrder>;
	assetId?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	extension?: InputMaybe<SortOrder>;
	label?: InputMaybe<SortOrder>;
	mimeType?: InputMaybe<SortOrder>;
	originalFilename?: InputMaybe<SortOrder>;
	path?: InputMaybe<SortOrder>;
	sha1hash?: InputMaybe<SortOrder>;
	size?: InputMaybe<SortOrder>;
	source?: InputMaybe<SanityAssetSourceDataSorting>;
	title?: InputMaybe<SortOrder>;
	url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
	__typename?: 'SanityImageAsset';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	altText?: Maybe<Scalars['String']>;
	assetId?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	extension?: Maybe<Scalars['String']>;
	label?: Maybe<Scalars['String']>;
	metadata?: Maybe<SanityImageMetadata>;
	mimeType?: Maybe<Scalars['String']>;
	originalFilename?: Maybe<Scalars['String']>;
	path?: Maybe<Scalars['String']>;
	sha1hash?: Maybe<Scalars['String']>;
	size?: Maybe<Scalars['Float']>;
	source?: Maybe<SanityAssetSourceData>;
	title?: Maybe<Scalars['String']>;
	uploadId?: Maybe<Scalars['String']>;
	url?: Maybe<Scalars['String']>;
};

export type SanityImageAssetFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	altText?: InputMaybe<StringFilter>;
	assetId?: InputMaybe<StringFilter>;
	description?: InputMaybe<StringFilter>;
	extension?: InputMaybe<StringFilter>;
	label?: InputMaybe<StringFilter>;
	metadata?: InputMaybe<SanityImageMetadataFilter>;
	mimeType?: InputMaybe<StringFilter>;
	originalFilename?: InputMaybe<StringFilter>;
	path?: InputMaybe<StringFilter>;
	sha1hash?: InputMaybe<StringFilter>;
	size?: InputMaybe<FloatFilter>;
	source?: InputMaybe<SanityAssetSourceDataFilter>;
	title?: InputMaybe<StringFilter>;
	uploadId?: InputMaybe<StringFilter>;
	url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	altText?: InputMaybe<SortOrder>;
	assetId?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	extension?: InputMaybe<SortOrder>;
	label?: InputMaybe<SortOrder>;
	metadata?: InputMaybe<SanityImageMetadataSorting>;
	mimeType?: InputMaybe<SortOrder>;
	originalFilename?: InputMaybe<SortOrder>;
	path?: InputMaybe<SortOrder>;
	sha1hash?: InputMaybe<SortOrder>;
	size?: InputMaybe<SortOrder>;
	source?: InputMaybe<SanityAssetSourceDataSorting>;
	title?: InputMaybe<SortOrder>;
	uploadId?: InputMaybe<SortOrder>;
	url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
	__typename?: 'SanityImageCrop';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	bottom?: Maybe<Scalars['Float']>;
	left?: Maybe<Scalars['Float']>;
	right?: Maybe<Scalars['Float']>;
	top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	bottom?: InputMaybe<FloatFilter>;
	left?: InputMaybe<FloatFilter>;
	right?: InputMaybe<FloatFilter>;
	top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	bottom?: InputMaybe<SortOrder>;
	left?: InputMaybe<SortOrder>;
	right?: InputMaybe<SortOrder>;
	top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
	__typename?: 'SanityImageDimensions';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	aspectRatio?: Maybe<Scalars['Float']>;
	height?: Maybe<Scalars['Float']>;
	width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	aspectRatio?: InputMaybe<FloatFilter>;
	height?: InputMaybe<FloatFilter>;
	width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	aspectRatio?: InputMaybe<SortOrder>;
	height?: InputMaybe<SortOrder>;
	width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
	__typename?: 'SanityImageHotspot';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	height?: Maybe<Scalars['Float']>;
	width?: Maybe<Scalars['Float']>;
	x?: Maybe<Scalars['Float']>;
	y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	height?: InputMaybe<FloatFilter>;
	width?: InputMaybe<FloatFilter>;
	x?: InputMaybe<FloatFilter>;
	y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	height?: InputMaybe<SortOrder>;
	width?: InputMaybe<SortOrder>;
	x?: InputMaybe<SortOrder>;
	y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
	__typename?: 'SanityImageMetadata';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	blurHash?: Maybe<Scalars['String']>;
	dimensions?: Maybe<SanityImageDimensions>;
	hasAlpha?: Maybe<Scalars['Boolean']>;
	isOpaque?: Maybe<Scalars['Boolean']>;
	location?: Maybe<Geopoint>;
	lqip?: Maybe<Scalars['String']>;
	palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	blurHash?: InputMaybe<StringFilter>;
	dimensions?: InputMaybe<SanityImageDimensionsFilter>;
	hasAlpha?: InputMaybe<BooleanFilter>;
	isOpaque?: InputMaybe<BooleanFilter>;
	location?: InputMaybe<GeopointFilter>;
	lqip?: InputMaybe<StringFilter>;
	palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	blurHash?: InputMaybe<SortOrder>;
	dimensions?: InputMaybe<SanityImageDimensionsSorting>;
	hasAlpha?: InputMaybe<SortOrder>;
	isOpaque?: InputMaybe<SortOrder>;
	location?: InputMaybe<GeopointSorting>;
	lqip?: InputMaybe<SortOrder>;
	palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
	__typename?: 'SanityImagePalette';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	darkMuted?: Maybe<SanityImagePaletteSwatch>;
	darkVibrant?: Maybe<SanityImagePaletteSwatch>;
	dominant?: Maybe<SanityImagePaletteSwatch>;
	lightMuted?: Maybe<SanityImagePaletteSwatch>;
	lightVibrant?: Maybe<SanityImagePaletteSwatch>;
	muted?: Maybe<SanityImagePaletteSwatch>;
	vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
	darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
	dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
	lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
	lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
	muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
	vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
	darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
	dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
	lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
	lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
	muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
	vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
	__typename?: 'SanityImagePaletteSwatch';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	background?: Maybe<Scalars['String']>;
	foreground?: Maybe<Scalars['String']>;
	population?: Maybe<Scalars['Float']>;
	title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	background?: InputMaybe<StringFilter>;
	foreground?: InputMaybe<StringFilter>;
	population?: InputMaybe<FloatFilter>;
	title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	background?: InputMaybe<SortOrder>;
	foreground?: InputMaybe<SortOrder>;
	population?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
	/** All documents that are drafts. */
	is_draft?: InputMaybe<Scalars['Boolean']>;
	/** All documents referencing the given document ID. */
	references?: InputMaybe<Scalars['ID']>;
};

export type ServiceAreas = Document & {
	__typename?: 'ServiceAreas';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	serviceAreaDescription?: Maybe<Scalars['String']>;
	serviceAreaImage?: Maybe<Image>;
	serviceAreaTitle?: Maybe<Scalars['String']>;
	serviceAreas?: Maybe<TextList>;
};

export type ServiceAreasFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	serviceAreaDescription?: InputMaybe<StringFilter>;
	serviceAreaImage?: InputMaybe<ImageFilter>;
	serviceAreaTitle?: InputMaybe<StringFilter>;
	serviceAreas?: InputMaybe<TextListFilter>;
};

export type ServiceAreasSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	serviceAreaDescription?: InputMaybe<SortOrder>;
	serviceAreaImage?: InputMaybe<ImageSorting>;
	serviceAreaTitle?: InputMaybe<SortOrder>;
	serviceAreas?: InputMaybe<TextListSorting>;
};

export type ServiceMembershipCard = {
	__typename?: 'ServiceMembershipCard';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	button?: Maybe<Cta>;
	membershipDescription?: Maybe<Scalars['String']>;
	membershipIcon?: Maybe<Image>;
	membershipIndex?: Maybe<Scalars['Float']>;
	membershipPrice?: Maybe<Scalars['String']>;
	membershipSummaryItems?: Maybe<Array<Maybe<CheckableItem>>>;
	membershipTitle?: Maybe<Scalars['String']>;
};

export type ServiceMembershipCardFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	button?: InputMaybe<CtaFilter>;
	membershipDescription?: InputMaybe<StringFilter>;
	membershipIcon?: InputMaybe<ImageFilter>;
	membershipIndex?: InputMaybe<FloatFilter>;
	membershipPrice?: InputMaybe<StringFilter>;
	membershipTitle?: InputMaybe<StringFilter>;
};

export type ServiceMembershipCardSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	button?: InputMaybe<CtaSorting>;
	membershipDescription?: InputMaybe<SortOrder>;
	membershipIcon?: InputMaybe<ImageSorting>;
	membershipIndex?: InputMaybe<SortOrder>;
	membershipPrice?: InputMaybe<SortOrder>;
	membershipTitle?: InputMaybe<SortOrder>;
};

export type ServiceMemberships = Document & {
	__typename?: 'ServiceMemberships';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	name?: Maybe<Scalars['String']>;
	serviceMembershipCards?: Maybe<Array<Maybe<ServiceMembershipCard>>>;
	serviceMembershipDescription?: Maybe<PortableText>;
	serviceMembershipDetails?: Maybe<Array<Maybe<Scalars['String']>>>;
	serviceMembershipImage?: Maybe<Image>;
	serviceMembershipTitle?: Maybe<Scalars['String']>;
};

export type ServiceMembershipsFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	name?: InputMaybe<StringFilter>;
	serviceMembershipDescription?: InputMaybe<PortableTextFilter>;
	serviceMembershipImage?: InputMaybe<ImageFilter>;
	serviceMembershipTitle?: InputMaybe<StringFilter>;
};

export type ServiceMembershipsSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	serviceMembershipDescription?: InputMaybe<PortableTextSorting>;
	serviceMembershipImage?: InputMaybe<ImageSorting>;
	serviceMembershipTitle?: InputMaybe<SortOrder>;
};

export type ServicesCards = {
	__typename?: 'ServicesCards';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	button?: Maybe<Cta>;
	isMainService?: Maybe<Scalars['Boolean']>;
	name?: Maybe<Scalars['String']>;
	thumbnailImage?: Maybe<Image>;
};

export type ServicesCardsFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	button?: InputMaybe<CtaFilter>;
	isMainService?: InputMaybe<BooleanFilter>;
	name?: InputMaybe<StringFilter>;
	thumbnailImage?: InputMaybe<ImageFilter>;
};

export type ServicesCardsSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	button?: InputMaybe<CtaSorting>;
	isMainService?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	thumbnailImage?: InputMaybe<ImageSorting>;
};

export type Slug = {
	__typename?: 'Slug';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	current?: Maybe<Scalars['String']>;
	source?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	current?: InputMaybe<StringFilter>;
	source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	current?: InputMaybe<SortOrder>;
	source?: InputMaybe<SortOrder>;
};

export enum SortOrder {
	/** Sorts on the value in ascending order. */
	Asc = 'ASC',
	/** Sorts on the value in descending order. */
	Desc = 'DESC',
}

export type Span = {
	__typename?: 'Span';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	marks?: Maybe<Array<Maybe<Scalars['String']>>>;
	text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
	/** Checks if the value is equal to the given input. */
	eq?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	/** Checks if the value matches the given word/words. */
	matches?: InputMaybe<Scalars['String']>;
	/** Checks if the value is not equal to the given input. */
	neq?: InputMaybe<Scalars['String']>;
	nin?: InputMaybe<Array<Scalars['String']>>;
};

export type SubmittedApplications = Document & {
	__typename?: 'SubmittedApplications';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	aboutApplicant?: Maybe<Scalars['String']>;
	address1?: Maybe<Scalars['String']>;
	address2?: Maybe<Scalars['String']>;
	city?: Maybe<Scalars['String']>;
	email?: Maybe<Scalars['String']>;
	employmentDesired?: Maybe<Scalars['String']>;
	jobPosition?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	phoneNumber?: Maybe<Scalars['String']>;
	resume?: Maybe<Scalars['String']>;
	state?: Maybe<Scalars['String']>;
	zipCode?: Maybe<Scalars['String']>;
};

export type SubmittedApplicationsFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	aboutApplicant?: InputMaybe<StringFilter>;
	address1?: InputMaybe<StringFilter>;
	address2?: InputMaybe<StringFilter>;
	city?: InputMaybe<StringFilter>;
	email?: InputMaybe<StringFilter>;
	employmentDesired?: InputMaybe<StringFilter>;
	jobPosition?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	phoneNumber?: InputMaybe<StringFilter>;
	resume?: InputMaybe<StringFilter>;
	state?: InputMaybe<StringFilter>;
	zipCode?: InputMaybe<StringFilter>;
};

export type SubmittedApplicationsSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	aboutApplicant?: InputMaybe<SortOrder>;
	address1?: InputMaybe<SortOrder>;
	address2?: InputMaybe<SortOrder>;
	city?: InputMaybe<SortOrder>;
	email?: InputMaybe<SortOrder>;
	employmentDesired?: InputMaybe<SortOrder>;
	jobPosition?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	phoneNumber?: InputMaybe<SortOrder>;
	resume?: InputMaybe<SortOrder>;
	state?: InputMaybe<SortOrder>;
	zipCode?: InputMaybe<SortOrder>;
};

export type TeamMembers = {
	__typename?: 'TeamMembers';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	memberDesignation?: Maybe<Scalars['String']>;
	memberEmail?: Maybe<Scalars['String']>;
	memberLinkedIn?: Maybe<Scalars['String']>;
	memberName?: Maybe<Scalars['String']>;
	profilePicture?: Maybe<Image>;
};

export type TeamMembersFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	memberDesignation?: InputMaybe<StringFilter>;
	memberEmail?: InputMaybe<StringFilter>;
	memberLinkedIn?: InputMaybe<StringFilter>;
	memberName?: InputMaybe<StringFilter>;
	profilePicture?: InputMaybe<ImageFilter>;
};

export type TeamMembersSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	memberDesignation?: InputMaybe<SortOrder>;
	memberEmail?: InputMaybe<SortOrder>;
	memberLinkedIn?: InputMaybe<SortOrder>;
	memberName?: InputMaybe<SortOrder>;
	profilePicture?: InputMaybe<ImageSorting>;
};

export type Testimonials = Document & {
	__typename?: 'Testimonials';
	/** Date the document was created */
	_createdAt?: Maybe<Scalars['DateTime']>;
	/** Document ID */
	_id?: Maybe<Scalars['ID']>;
	_key?: Maybe<Scalars['String']>;
	/** Current document revision */
	_rev?: Maybe<Scalars['String']>;
	/** Document type */
	_type?: Maybe<Scalars['String']>;
	/** Date the document was last modified */
	_updatedAt?: Maybe<Scalars['DateTime']>;
	testimonialCardIcon?: Maybe<Image>;
	testimonialCards?: Maybe<Array<Maybe<TitleDescription>>>;
	testimonialDescription?: Maybe<Scalars['String']>;
	testimonialTitle?: Maybe<Scalars['String']>;
};

export type TestimonialsFilter = {
	/** Apply filters on document level */
	_?: InputMaybe<Sanity_DocumentFilter>;
	_createdAt?: InputMaybe<DatetimeFilter>;
	_id?: InputMaybe<IdFilter>;
	_key?: InputMaybe<StringFilter>;
	_rev?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	_updatedAt?: InputMaybe<DatetimeFilter>;
	testimonialCardIcon?: InputMaybe<ImageFilter>;
	testimonialDescription?: InputMaybe<StringFilter>;
	testimonialTitle?: InputMaybe<StringFilter>;
};

export type TestimonialsSorting = {
	_createdAt?: InputMaybe<SortOrder>;
	_id?: InputMaybe<SortOrder>;
	_key?: InputMaybe<SortOrder>;
	_rev?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	_updatedAt?: InputMaybe<SortOrder>;
	testimonialCardIcon?: InputMaybe<ImageSorting>;
	testimonialDescription?: InputMaybe<SortOrder>;
	testimonialTitle?: InputMaybe<SortOrder>;
};

export type TextList = {
	__typename?: 'TextList';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	listItem?: Maybe<Array<Maybe<Scalars['String']>>>;
	name?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
};

export type TextListFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
};

export type TextListSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
};

export type TitleDescription = {
	__typename?: 'TitleDescription';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	subText?: Maybe<Scalars['String']>;
	titleText?: Maybe<Scalars['String']>;
};

export type TitleDescriptionFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	description?: InputMaybe<StringFilter>;
	subText?: InputMaybe<StringFilter>;
	titleText?: InputMaybe<StringFilter>;
};

export type TitleDescriptionImage = {
	__typename?: 'TitleDescriptionImage';
	_key?: Maybe<Scalars['String']>;
	_type?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	image?: Maybe<Image>;
	subText?: Maybe<Scalars['String']>;
	titleText?: Maybe<Scalars['String']>;
};

export type TitleDescriptionImageFilter = {
	_key?: InputMaybe<StringFilter>;
	_type?: InputMaybe<StringFilter>;
	description?: InputMaybe<StringFilter>;
	image?: InputMaybe<ImageFilter>;
	subText?: InputMaybe<StringFilter>;
	titleText?: InputMaybe<StringFilter>;
};

export type TitleDescriptionImageSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	image?: InputMaybe<ImageSorting>;
	subText?: InputMaybe<SortOrder>;
	titleText?: InputMaybe<SortOrder>;
};

export type TitleDescriptionSorting = {
	_key?: InputMaybe<SortOrder>;
	_type?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	subText?: InputMaybe<SortOrder>;
	titleText?: InputMaybe<SortOrder>;
};
