<?php

namespace Admin\Model\Entity;

use Zend\Stdlib\ArraySerializableInterface;

/**
 * Class ArticleEntity.
 * @package Admin\Model\Entity
 */
class ArticleEntity implements ArraySerializableInterface
{

    /**
     * @var string
     */
    private $article_uuid;

    /**
     * @var string
     */
    private $title;

    /**
     * @var string
     */
    private $slug;

    /**
     * @var string
     */
    private $body;

    /**
     * @var string
     */
    private $lead;

    /**
     * @var integer
     */
    private $type;

    /**
     * @var \DateTime
     */
    private $created_at;

    /**
     * @var \DateTime
     */
    private $published_at;

    /**
     * @var integer
     */
    private $status;

    /**
     * @var integer
     */
    private $user_id;

    /**
     * @inheritdoc
     *
     * @param array $array
     */
    public function exchangeArray(array $array)
    {
        foreach ($array as $key => $value) {
            $setter = 'set' . ucfirst($key);

            if (method_exists($this, $setter)) {
                $this->{$setter}($value);
            }
        }
    }

    /**
     * @inheritdoc
     *
     * @return array
     */
    public function getArrayCopy()
    {
        $data = [];

        foreach (get_object_vars($this) as $key => $value) {
            $data[$key] = $value;
        }

        return $data;
    }

    /**
     * @return string
     */
    public function getArticle_uuid()
    {
        return $this->article_uuid;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * @return string
     */
    public function getBody()
    {
        return $this->body;
    }

    /**
     * @return string
     */
    public function getLead()
    {
        return $this->lead;
    }

    /**
     * @return int
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @return \DateTime
     */
    public function getCreated_at()
    {
        return $this->created_at;
    }

    /**
     * @return \DateTime
     */
    public function getPublished_at()
    {
        return $this->published_at;
    }

    /**
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @return int
     */
    public function getUser_id()
    {
        return $this->user_id;
    }

    /**
     * @param string $articleUuid
     */
    private function setArticle_uuid($articleUuid)
    {
        $this->article_uuid = $articleUuid;
    }

    /**
     * @param string $title
     */
    private function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * @param string $slug
     */
    private function setSlug($slug)
    {
        $this->slug = $slug;
    }

    /**
     * @param string $body
     */
    private function setBody($body)
    {
        $this->body = $body;
    }

    /**
     * @param string $lead
     */
    private function setLead($lead)
    {
        $this->lead = $lead;
    }

    /**
     * @param int $type
     */
    private function setType($type)
    {
        $this->type = $type;
    }

    /**
     * @param \DateTime $createdAt
     */
    private function setCreated_at($createdAt)
    {
        $this->createdAt = $createdAt;
    }

    /**
     * @param \DateTime $publishedAt
     */
    private function setPublished_at($publishedAt)
    {
        $this->publishedAt = $publishedAt;
    }

    /**
     * @param int $status
     */
    private function setStatus($status)
    {
        $this->status = $status;
    }

    /**
     * @param int $userId
     */
    private function setUser_id($userId)
    {
        $this->user_id = $userId;
    }
}